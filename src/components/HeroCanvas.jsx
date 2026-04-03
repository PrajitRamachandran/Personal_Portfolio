import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedRing({ mouse }) {
  const outerRef = useRef()
  const innerRef = useRef()
  const coreRef = useRef()
  const particlesRef = useRef()

  // Particles
  const particlePositions = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = 2.5 + Math.random() * 1.5
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // OUTER RING
    if (outerRef.current) {
      outerRef.current.rotation.x =
        Math.PI / 4 + Math.sin(t * 0.3) * 0.08 + mouse.current.y * 0.25
      outerRef.current.rotation.y += 0.006
      outerRef.current.rotation.z =
        Math.cos(t * 0.2) * 0.04 + mouse.current.x * 0.25

      outerRef.current.position.set(0, 0, 0)
    }

    // INNER RING
    if (innerRef.current) {
      innerRef.current.rotation.x = -Math.PI / 6 + t * 0.01
      innerRef.current.rotation.y -= 0.012
      innerRef.current.rotation.z = t * 0.006

      innerRef.current.position.set(0, 0, 0)
    }

    // CORE
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.4
      coreRef.current.rotation.y = t * 0.25

      const pulse = 1 + Math.sin(t * 2) * 0.04
      coreRef.current.scale.setScalar(pulse)

      coreRef.current.position.set(0, 0, 0)
    }

    // PARTICLES
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.04
      particlesRef.current.rotation.x = Math.sin(t * 0.1) * 0.15
    }
  })

  return (
    <group position={[0, -0.25, 0]}>
      {/* Outer ring */}
      <mesh ref={outerRef}>
        <torusGeometry args={[1.8, 0.04, 16, 200]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

      {/* Inner ring */}
      <mesh ref={innerRef}>
        <torusGeometry args={[1.4, 0.03, 16, 200]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>

      {/* Third ring (fixed tilt) */}
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 6]}>
        <torusGeometry args={[1.6, 0.02, 16, 200]} />
        <meshStandardMaterial
          color="#f472b6"
          emissive="#f472b6"
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>

      {/* Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={1}
          distort={0.4}
          speed={3}
          roughness={0}
          metalness={0.8}
        />
      </mesh>

      {/* Glow */}
      <Sphere args={[0.55, 16, 16]}>
        <meshStandardMaterial
          color="#00d4ff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={particlePositions}
            count={particlePositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#00d4ff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Lights */}
      <pointLight color="#00d4ff" intensity={2.5} position={[2, 2, 2]} />
      <pointLight color="#a855f7" intensity={1.8} position={[-2, -2, -2]} />
      <pointLight color="#f472b6" intensity={1} position={[0, 3, 0]} />
      <ambientLight intensity={0.12} />
    </group>
  )
}

function CameraRig({ mouse }) {
  const { camera } = useThree()

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.3 - camera.position.x) * 0.02
    camera.position.y += (-mouse.current.y * 0.3 - camera.position.y) * 0.02
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default function HeroCanvas({ mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        {/* NO FLOAT = NO DRIFT */}
        <AnimatedRing mouse={mouse} />
        <CameraRig mouse={mouse} />
      </Suspense>
    </Canvas>
  )
}