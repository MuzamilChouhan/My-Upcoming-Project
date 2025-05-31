import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// 3D Burger Component
function Burger({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {/* Bottom Bun */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.8, 0.9, 0.3, 16]} />
          <meshStandardMaterial color="#D2691E" />
        </mesh>
        
        {/* Lettuce */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.75, 0.75, 0.1, 16]} />
          <meshStandardMaterial color="#90EE90" />
        </mesh>
        
        {/* Tomato */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.1, 16]} />
          <meshStandardMaterial color="#FF6347" />
        </mesh>
        
        {/* Cheese */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.72, 0.72, 0.05, 16]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
        
        {/* Meat Patty */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.65, 0.65, 0.2, 16]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Top Bun */}
        <mesh position={[0, 0.4, 0]}>
          <sphereGeometry args={[0.8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#D2691E" />
        </mesh>
        
        {/* Sesame Seeds */}
        {[...Array(8)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 8) * Math.PI * 2) * 0.4,
              0.6,
              Math.sin((i / 8) * Math.PI * 2) * 0.4
            ]}
          >
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial color="#F5DEB3" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// 3D Pizza Slice Component
function PizzaSlice({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
      groupRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 0.9) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.7}>
      <group ref={groupRef} position={position} rotation={[0, 0, Math.PI / 6]}>
        {/* Pizza Base */}
        <mesh>
          <coneGeometry args={[1, 0.1, 3]} />
          <meshStandardMaterial color="#DEB887" />
        </mesh>
        
        {/* Cheese */}
        <mesh position={[0, 0.05, 0]}>
          <coneGeometry args={[0.95, 0.05, 3]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
        
        {/* Pepperoni */}
        {[...Array(3)].map((_, i) => (
          <mesh
            key={i}
            position={[
              (i - 1) * 0.3,
              0.08,
              (i % 2 - 0.5) * 0.2
            ]}
          >
            <cylinderGeometry args={[0.1, 0.1, 0.02, 8]} />
            <meshStandardMaterial color="#DC143C" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// 3D Biryani Bowl Component
function BiryaniBowl({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.1) * 0.08;
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={groupRef} position={position}>
        {/* Bowl */}
        <mesh>
          <sphereGeometry args={[0.7, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        
        {/* Rice */}
        <mesh position={[0, 0.1, 0]}>
          <sphereGeometry args={[0.65, 16, 16, 0, Math.PI * 2, 0, Math.PI / 3]} />
          <meshStandardMaterial color="#F5DEB3" />
        </mesh>
        
        {/* Saffron Rice */}
        {[...Array(20)].map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 1,
              0.2 + Math.random() * 0.2,
              (Math.random() - 0.5) * 1
            ]}
          >
            <sphereGeometry args={[0.02, 4, 4]} />
            <meshStandardMaterial color="#FF8C00" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Main Food Scene Component
export function FoodScene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff9500" />
      
      {/* 3D Food Models */}
      <Burger position={[0, 0, 0]} />
      <PizzaSlice position={[-3, -1, -2]} />
      <BiryaniBowl position={[3, -0.5, -1]} />
      
      {/* 3D Text */}
      <Center position={[0, -2, 0]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
        >
          Food Valley
          <meshStandardMaterial color="#ff6b35" />
        </Text3D>
      </Center>
      
      {/* Floating Food Particles */}
      {[...Array(15)].map((_, i) => (
        <Float
          key={i}
          speed={1 + Math.random()}
          rotationIntensity={0.5}
          floatIntensity={0.8}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10
            ]}
          >
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial 
              color={['#ff6b35', '#f7931e', '#ffd700', '#90ee90', '#ff6347'][Math.floor(Math.random() * 5)]} 
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default FoodScene;