import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { FilmPass } from 'three/addons/postprocessing/FilmPass.js'
import { VignetteShader } from 'three/addons/shaders/VignetteShader.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'

export function useThreeScene(containerRef, { onProgress, onReady }) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // ── state ────────────────────────────────────────────────────────────────
    const FPS = 30
    const interval = 1000 / FPS
    let lastTime = 0
    let animFrameId = null
    const mouse = { x: 0, y: 0 }
    let room = null
    let rotationValues = { x: 0, y: 0, z: 0 }

    // ── renderer / scene / camera ────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x00040d)

    const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 1, 4)

    // ── loaders ──────────────────────────────────────────────────────────────
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('./draco/')
    const loader = new GLTFLoader()
    loader.setDRACOLoader(dracoLoader)

    // ── post-processing ──────────────────────────────────────────────────────
    const composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.28, 2, 0.1
    )
    const effectFilm = new FilmPass(1.5)
    const effectVignette = new ShaderPass(VignetteShader)
    effectVignette.uniforms.darkness.value = 1.1

    // ── room loaders ─────────────────────────────────────────────────────────
    function loadComicRoom() {
      return new Promise((resolve) => {
        loader.load(
          './models/late_night_office.glb',
          (gltf) => {
            const model = gltf.scene
            model.position.set(0, 0, 0)
            model.rotation.set(0, 15, 0)
            model.scale.set(1, 1, 1)
            rotationValues = { x: 0, y: 15, z: 0 }
            scene.add(new THREE.AmbientLight(0x777777))
            resolve(model)
          },
          (xhr) => onProgress(Math.round((xhr.loaded / 33758656) * 100)),
          console.error
        )
      })
    }

    function loadNinetysOffice() {
      return new Promise((resolve) => {
        loader.load(
          './models/90s_office.glb',
          (gltf) => {
            const model = gltf.scene
            model.position.set(0, -0.3, 2)
            model.rotation.set(0, 0, 0)
            model.scale.set(1, 1, 1)
            model.traverse((node) => {
              if (node.isMesh || node.isLight) {
                node.castShadow = true
                node.receiveShadow = true
              }
            })
            rotationValues = { x: 0.5, y: -7.5, z: 0 }

            const lightTarget = new THREE.Object3D()
            lightTarget.position.set(-0.45, 0, -0.9)
            model.add(lightTarget)

            const spotLight = new THREE.SpotLight(0xffffaa, 1)
            spotLight.position.set(-0.45, 1.1, -0.9)
            spotLight.shadow.bias = -0.001
            spotLight.castShadow = true
            spotLight.shadow.camera.near = 0.1
            spotLight.target = lightTarget
            model.add(spotLight)
            scene.add(new THREE.AmbientLight(0x444444))
            resolve(model)
          },
          (xhr) => onProgress(Math.round((xhr.loaded / 5151624) * 100)),
          console.error
        )
      })
    }

    function loadNinetysOfficeCubicle() {
      return new Promise((resolve) => {
        loader.load(
          './models/90s_office_cubicle.glb',
          (gltf) => {
            const model = gltf.scene
            model.position.set(0, -4, -6)
            model.rotation.set(0.3, -8.5, 0)
            model.scale.set(1, 1, 1)
            model.traverse((node) => {
              if (node.isMesh || node.isLight) {
                node.castShadow = true
                node.receiveShadow = true
              }
            })
            rotationValues = { x: 0.3, y: -8.5, z: 0 }

            const lightTarget = new THREE.Object3D()
            lightTarget.position.set(-3.2, 4, 1.3)
            model.add(lightTarget)

            const spotLight = new THREE.SpotLight(0xffffaa, 5)
            spotLight.position.set(-3.2, 6, 1.3)
            spotLight.castShadow = true
            spotLight.shadow.bias = -0.001
            spotLight.target = lightTarget
            model.add(spotLight)
            model.add(new THREE.AmbientLight(0x444444))
            resolve(model)
          },
          (xhr) => onProgress(Math.round((xhr.loaded / 28025508) * 100)),
          console.error
        )
      })
    }

    // ── room selection & scene init ──────────────────────────────────────────
    const rooms = [
      { load: loadComicRoom,           bloom: true, film: true, vignette: true },
      { load: loadNinetysOffice,       bloom: true, film: true, vignette: true },
      { load: loadNinetysOfficeCubicle,bloom: true, film: true, vignette: true },
    ]
    const selected = rooms[Math.floor(Math.random() * rooms.length)]

    if (selected.film)     composer.addPass(effectFilm)
    if (selected.vignette) composer.addPass(effectVignette)
    if (selected.bloom)    composer.addPass(bloomPass)

    selected.load().then((model) => {
      room = model
      scene.add(room)
      onReady()
      animFrameId = requestAnimationFrame(animate)
    })

    // ── animation loop ───────────────────────────────────────────────────────
    function animate(time) {
      animFrameId = requestAnimationFrame(animate)
      const delta = time - lastTime
      if (delta > interval) {
        lastTime = time - (delta % interval)
        if (room) {
          room.rotation.set(
            rotationValues.x + mouse.x,
            rotationValues.y + mouse.y * -1,
            rotationValues.z
          )
        }
        composer.render()
      }
    }

    // ── event listeners ──────────────────────────────────────────────────────
    function onMouseMove(e) {
      mouse.y = Math.round(((e.clientX / window.innerWidth) * 200 - 100)) / 1000
      mouse.x = Math.round((-(e.clientY / window.innerHeight) * 200 + 100)) / 1000
    }

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      composer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    // ── cleanup ──────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      composer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}
