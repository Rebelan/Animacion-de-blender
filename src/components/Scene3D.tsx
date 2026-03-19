import * as THREE from 'three'
import { Stars, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { OrbitControls } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF("/Isla.glb")
  const ref = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002 // rotación automática lenta
    }
  })

  return <primitive ref={ref} object={scene} scale={1.5} />
}

export default function Scene3D() {
  return (
    <Canvas style={{width: "50vw", height: "50vh", overflow:"hidden"}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />


        <pointLight position={[10, 10, 10]}/>
        <Suspense fallback={null}>
            <Model />
        </Suspense>
        <Stars></Stars>
      <OrbitControls />
    </Canvas>
  )
}