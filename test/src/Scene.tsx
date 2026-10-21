import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Points, PointMaterial } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function OrbitGeometry() {
  const group = useRef<THREE.Group>(null)
  const ring = useRef<THREE.Mesh>(null)
  const points = useMemo(() => {
    const coords = new Float32Array(360 * 3)
    for (let i = 0; i < 360; i++) {
      const radius = 2.1 + Math.random() * 1.7
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      coords[i * 3 + 2] = radius * Math.cos(phi)
    }
    return coords
  }, [])

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.035
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, state.pointer.y * 0.08, 3, delta)
      group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, -state.pointer.x * 0.08, 3, delta)
    }
    if (ring.current) ring.current.rotation.z += delta * 0.025
  })

  return (
    <group ref={group}>
      <Float speed={0.55} rotationIntensity={0.08} floatIntensity={0.12}>
        <mesh>
          <icosahedronGeometry args={[1.1, 1]} />
          <meshBasicMaterial color="#8aaeff" wireframe transparent opacity={0.14} />
        </mesh>
      </Float>
      <mesh ref={ring} rotation={[0.72, 0.24, -0.35]}>
        <torusGeometry args={[1.7, 0.003, 8, 180]} />
        <meshBasicMaterial color="#6f9bff" transparent opacity={0.42} />
      </mesh>
      <Points positions={points} stride={3} limit={360}>
        <PointMaterial transparent color="#a8c4ff" size={0.018} sizeAttenuation depthWrite={false} opacity={0.72} />
      </Points>
    </group>
  )
}

export default function Scene() {
  return (
    <div className="scene-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 4]} intensity={1.4} color="#8baeff" />
        <OrbitGeometry />
      </Canvas>
    </div>
  )
}
