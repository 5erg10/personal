import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

import { FilmPass } from 'three/addons/postprocessing/FilmPass.js';
import { VignetteShader } from 'three/addons/shaders/VignetteShader.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

export const initRender = async () => {

	let fps = 30;  // Deseamos 30 FPS
	let interval = 1000 / fps;  // El intervalo de tiempo para cada frame (en milisegundos)
	let lastTime = 0;
	let mouse =  { x: 0, y: 0 };
	let room, composer;
	let rotationValues = { x: 0, y: 0, z: 0 };

	const availableRooms = [
		// { model: homeOffice, bloom: true, film: true, vignette: true },
		{ model: comicRoom, bloom: true, film: true, vignette: true },
		// { model: apocalypto, bloom: false, film: true, vignette: true }
	];

	const selectedRoom = availableRooms[Math.floor(Math.random() * availableRooms.length)];

	const container = document.getElementById( 'container' );
	const renderer = new THREE.WebGLRenderer( { antialias: true } );
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 100 );

	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.outputEncoding = THREE.sRGBEncoding;

	container.appendChild( renderer.domElement );

	scene.background = new THREE.Color( 0x080c24);

	const light = new THREE.AmbientLight( 0xaaaaaa ); // soft white light
	scene.add( light );

	camera.position.set( 0, 1, 4 );

	const dracoLoader = new DRACOLoader();
	dracoLoader.setDecoderPath( 'libs/threejs/examples/jsm/libs/draco/gltf/' );

	const loader = new GLTFLoader();
	loader.setDRACOLoader( dracoLoader );

	// -------  POST PROCCESING

	composer = new EffectComposer( renderer );

	composer.addPass( new RenderPass( scene, camera ) );

	const bloomPass = new UnrealBloomPass( 
		new THREE.Vector2( window.innerWidth, window.innerHeight ),  // resolution on effect
		0.28, // intensity of effect
		2, // radio of effect
		0.1 // which pixels are affected by effet, must tu probe
	);

	const effectFilm = new FilmPass( 1.5 );
	const effectVignette = new ShaderPass( VignetteShader );
	effectVignette.uniforms.darkness.value = 1.1;

	if (selectedRoom.film) composer.addPass( effectFilm );
	if (selectedRoom.vignette) composer.addPass( effectVignette );
	if (selectedRoom.bloom) composer.addPass( bloomPass );

	// -------  END POST PROCCESING

	room = await selectedRoom.model(loader);

	scene.add( room );

	$('.loading').toggleClass('closed');
	animate();

	window.onresize = function () {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	};


	function animate(time) {
		const deltaTime = time - lastTime;
		if (deltaTime > interval) {
			lastTime = time - (deltaTime % interval);
			if (room) {
				room.rotation.set(rotationValues.x + mouse.x, (rotationValues.y + mouse.y * -1), rotationValues.z + 0);
			}
			composer.render();
			// renderer.render(scene, camera);
		}
		requestAnimationFrame(animate);
	}

	window.addEventListener('mousemove', onMouseMove, false);

	function onMouseMove(event) {
		mouse.y = Math.round((( event.clientX / window.innerWidth ) * 200 - 100)) / 1000;
		mouse.x = Math.round((-( event.clientY / window.innerHeight ) * 200 + 100)) / 1000;
	}

	function homeOffice(loader) {
		return new Promise((resolve, reject) => {
			loader.load( 'models/home_office_pro.glb', function ( gltf ) {
				const homeOfficeModel = gltf.scene;
				homeOfficeModel.position.set( 0, 0, 0 );
				homeOfficeModel.rotation.set( 0.2, -0.6, 0 );
				homeOfficeModel.scale.set( 1, 1, 1 );
				rotationValues = { x: 0.2, y: -0.6, z: 0 };
				homeOfficeModel?.children?.forEach( obj => {
					if (obj.isMesh && obj.material.map) {
						obj.material.map.encoding = THREE.sRGBEncoding;
					}
				})
				return resolve(homeOfficeModel)

			}, function ( xhr ) {
				$('.loading')[0].innerText = `Loading ${Math.round((xhr.loaded / 253596696) * 100)}%`;
			}, function ( e ) {
				console.error( e );
			});
		})
	}

	function apocalypto(loader) {
		return new Promise((resolve, reject) => {
			loader.load( 'models/post_apocalyptic_office.glb', function ( gltf ) {
				const apocalyptoRoomModel = gltf.scene;
				apocalyptoRoomModel.position.set( 0, 0, 0 );
				apocalyptoRoomModel.rotation.set( 0, 0, 0 );
				apocalyptoRoomModel.scale.set( 1, 1, 1 );
				rotationValues = { x: 0, y: 0, z: 0 };
				apocalyptoRoomModel?.children?.forEach( obj => {
					if (obj.isMesh && obj.material.map) {
						obj.material.map.encoding = THREE.sRGBEncoding;
					}
				})
				return resolve(apocalyptoRoomModel)
			}, function ( xhr ) {
				$('.loading')[0].innerText = `Loading ${Math.round((xhr.loaded / 62890612) * 100)}%`;
			}, function ( e ) {
				console.error( e );
			});
		})
	}

	function comicRoom(loader) {
		return new Promise((resolve, reject) => {
			loader.load( 'models/late_night_office.glb', function ( gltf ) {
				const comicRoomModel = gltf.scene;
				comicRoomModel.position.set( 0, 0, 0 );
				comicRoomModel.rotation.set( 0, 15, 0 );
				comicRoomModel.scale.set( 1, 1, 1 );
				rotationValues = { x: 0, y: 15, z: 0 };
				comicRoomModel?.children?.forEach( obj => {
					if (obj.isMesh && obj.material.map) {
						obj.material.map.encoding = THREE.sRGBEncoding;
					}
				})
				return resolve(comicRoomModel)

			}, function ( xhr ) {
				$('.loading')[0].innerText = `Loading ${Math.round((xhr.loaded / 33758656) * 100)}%`;
			}, function ( e ) {
				console.error( e );
			});
		})
	}
};