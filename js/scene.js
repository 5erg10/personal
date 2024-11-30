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
		// { model: apocalypto, bloom: false, film: true, vignette: true },
		{ model: ninetysOffice, bloom: true, film: true, vignette: true },
		{ model: ninetysOfficeCubicle, bloom: true, film: true, vignette: true },
	];

	const selectedRoom = availableRooms[Math.floor(Math.random() * availableRooms.length)];

	const container = document.getElementById( 'container' );
	const renderer = new THREE.WebGLRenderer( { antialias: true } );
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 100 );

	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = true;
	renderer.outputEncoding = THREE.sRGBEncoding;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;

	container.appendChild( renderer.domElement );

	scene.background = new THREE.Color( 0x00040d);

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
				});
				
				const light = new THREE.AmbientLight( 0xaaaaaa ); // soft white light
				scene.add( light );

				return resolve(homeOfficeModel);

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
				});

				const light = new THREE.AmbientLight( 0xaaaaaa ); // soft white light
				scene.add( light );

				return resolve(apocalyptoRoomModel);

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

				const light = new THREE.AmbientLight( 0x777777 ); // soft white light
				scene.add( light );

				return resolve(comicRoomModel);

			}, function ( xhr ) {
				$('.loading')[0].innerText = `Loading ${Math.round((xhr.loaded / 33758656) * 100)}%`;
			}, function ( e ) {
				console.error( e );
			});
		})
	}

	function ninetysOffice(loader) {
		return new Promise((resolve, reject) => {
			loader.load( 'models/90s_office.glb', function ( gltf ) {

				const ninetysOfficeModel = gltf.scene;
				ninetysOfficeModel.position.set( 0, -0.3, 2 );
				ninetysOfficeModel.rotation.set( 0, 0, 0 );
				ninetysOfficeModel.scale.set( 1, 1, 1 );
				ninetysOfficeModel.castShadow = true;
				ninetysOfficeModel.receiveShadow = true;
				ninetysOfficeModel.traverse( function ( node ) {
                    if ( node.isMesh || node.isLight ) node.castShadow = true;
                    if ( node.isMesh || node.isLight ) node.receiveShadow = true;
                } );

				rotationValues = { x: 0.5, y: -7.5, z: 0 };

				const lightTargetObject = new THREE.Object3D();
				lightTargetObject.position.set(-0.45, 0, -0.9);
				ninetysOfficeModel.add(lightTargetObject);

				const spotLight = new THREE.SpotLight( 0xffffaa, 1 );
				spotLight.position.set( -0.45, 1.1, -0.9 );
				spotLight.shadow.bias = -0.001;
				spotLight.castShadow = true;
				spotLight.shadow.camera.near = 0.1;
				spotLight.target = lightTargetObject;

				// const spotLightHelper = new THREE.SpotLightHelper( spotLight );
				// ninetysOfficeModel.add( spotLightHelper );
				
				ninetysOfficeModel.add( spotLight );

				const light = new THREE.AmbientLight( 0x444444 ); // soft white light
				scene.add( light );

				return resolve(ninetysOfficeModel);

			}, function ( xhr ) {
				$('.loading')[0].innerText = `Loading ${Math.round((xhr.loaded / 5151624) * 100)}%`;
			}, function ( e ) {
				console.error( e );
			});
		})
	}

	function ninetysOfficeCubicle(loader) {
		return new Promise((resolve, reject) => {
			
			loader.load( 'models/90s_office_cubicle.glb', function ( gltf ) {
				
				const ninetysOfficeCubicleModel = gltf.scene;
				ninetysOfficeCubicleModel.position.set( 0, -4, -6 );
				ninetysOfficeCubicleModel.rotation.set( 0.3, -8.5, 0 );
				ninetysOfficeCubicleModel.scale.set( 1, 1, 1 );
				ninetysOfficeCubicleModel.traverse( function ( node ) {
                    if ( node.isMesh || node.isLight ) node.castShadow = true;
                    if ( node.isMesh || node.isLight ) node.receiveShadow = true;
                } );

				rotationValues = { x: 0.3, y: -8.5, z: 0 };

				const lightTargetObject = new THREE.Object3D();
				lightTargetObject.position.set(-3.2, 4, 1.3);
				ninetysOfficeCubicleModel.add(lightTargetObject);

				const spotLight = new THREE.SpotLight( 0xffffaa, 5 );
				spotLight.position.set( -3.2, 6, 1.3 );
				spotLight.castShadow = true;
				spotLight.shadow.bias = -0.001;

				spotLight.target = lightTargetObject;
				
				ninetysOfficeCubicleModel.add( spotLight );

				const light = new THREE.AmbientLight( 0x444444 ); // soft white light
				ninetysOfficeCubicleModel.add( light );
				
				return resolve(ninetysOfficeCubicleModel)

			}, function ( xhr ) {
				$('.loading')[0].innerText = `Loading ${Math.round((xhr.loaded / 28025508) * 100)}%`;
			}, function ( e ) {
				console.error( e );
			});
		})
	}
};