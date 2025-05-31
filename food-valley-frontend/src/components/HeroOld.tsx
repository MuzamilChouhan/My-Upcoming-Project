import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { FaArrowDown, FaUtensils, FaStar } from 'react-icons/fa';
import { FoodScene } from './Food3D';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, 
    rgba(255, 248, 220, 0.9) 0%, 
    rgba(255, 255, 255, 0.95) 50%, 
    rgba(247, 147, 30, 0.1) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23FF6B35" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23F7931E" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23C1272D" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
    animation: float 20s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(-30px, -30px) rotate(120deg); }
    66% { transform: translate(30px, -20px) rotate(240deg); }
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
    text-align: center;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const TextContent = styled(motion.div)`
  z-index: 3;
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: ${({ theme }) => theme.lineHeights.tight};
  font-family: ${({ theme }) => theme.fonts.display};

  .highlight {
    background: ${({ theme }) => theme.colors.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: ${({ theme }) => theme.colors.gradient.primary};
      border-radius: ${({ theme }) => theme.borderRadius.full};
      opacity: 0.3;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const UrduText = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.urdu};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  direction: rtl;
  font-weight: 600;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion(Link))`
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: all ${({ theme }) => theme.transitions.normal};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left ${({ theme }) => theme.transitions.slow};
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows['2xl']};
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled(motion(Link))`
  background: rgba(255, 255, 255, 0.9);
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['2xl']};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: all ${({ theme }) => theme.transitions.normal};
  backdrop-filter: blur(${({ theme }) => theme.blur.sm});
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradient.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${({ theme }) => theme.transitions.normal};
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const Features = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const CanvasContainer = styled.div`
  height: 500px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing['2xl']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;

  svg {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const FoodEmoji = styled(motion.div)`
  font-size: 4rem;
  position: absolute;
  user-select: none;
`;

const FloatingFoodElements = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CentralFoodDisplay = styled(motion.div)`
  font-size: 8rem;
  text-align: center;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
`;

// Burger 3D Model Component
const Burger3D = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Bottom Bun */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.8, 0.9, 0.3, 16]} />
        <meshStandardMaterial color="#D2691E" />
      </mesh>
      {/* Lettuce */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.1, 16]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
      {/* Patty */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.2, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Cheese */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.65, 0.65, 0.05, 16]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      {/* Top Bun */}
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>
      {/* Sesame Seeds */}
      {[...Array(6)].map((_, i) => (
        <mesh key={i} position={[
          Math.cos(i * Math.PI / 3) * 0.4,
          0.6,
          Math.sin(i * Math.PI / 3) * 0.4
        ]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#F5DEB3" />
        </mesh>
      ))}
    </group>
  );
};

// Samosa 3D Model
const Samosa3D = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.7) * 0.2;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + 1) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Samosa Body */}
      <mesh rotation={[0, 0, 0]}>
        <coneGeometry args={[0.6, 1.2, 3]} />
        <meshStandardMaterial color="#DAA520" />
      </mesh>
      {/* Texture lines */}
      <mesh position={[0, 0.2, 0]} rotation={[0, Math.PI / 6, 0]}>
        <coneGeometry args={[0.58, 1.15, 3]} />
        <meshStandardMaterial color="#B8860B" />
      </mesh>
    </group>
  );
};

// Coffee Cup 3D Model
const CoffeeCup = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.8 + 3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Cup */}
      <mesh>
        <cylinderGeometry args={[0.4, 0.3, 0.8, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      {/* Coffee */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.38, 0.38, 0.1, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Handle */}
      <mesh position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.2, 0.05, 8, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      {/* Steam particles */}
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[i * 0.1 - 0.1, 0.6 + i * 0.1, 0]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#E6E6FA" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
};

// Biryani Bowl 3D Model
const BiryaniBowl = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2.2 + 4) * 0.12;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Bowl */}
      <mesh>
        <sphereGeometry args={[0.7, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Rice */}
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.65, 16, 16, 0, Math.PI * 2, 0, Math.PI / 3]} />
        <meshStandardMaterial color="#FFFACD" />
      </mesh>
      {/* Spices */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[
          Math.cos(i * Math.PI / 4) * 0.3,
          0.2,
          Math.sin(i * Math.PI / 4) * 0.3
        ]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#FF4500" : "#228B22"} />
        </mesh>
      ))}
    </group>
  );
};

// Main 3D Scene Component
const Hero3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <Suspense fallback={null}>
        <FoodScene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
    </Canvas>
  );
};

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <HeroContent>
        <TextContent>
          <Title
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <span className="highlight">Food Valley</span>
          </Title>
          
          <UrduText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            خوش آمدید فوڈ ویلی میں
          </UrduText>

          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the authentic taste of Pakistani cuisine in the heart of Layyah. 
            From delicious burgers to traditional biryani, we serve fresh and flavorful food.
          </Subtitle>

          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <PrimaryButton 
              to="/menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUtensils />
              View Menu
            </PrimaryButton>
            <SecondaryButton 
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Now
            </SecondaryButton>
          </ButtonGroup>

          <Features
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Feature>
              <FaStar />
              <span>Fresh Ingredients</span>
            </Feature>
            <Feature>
              <FaStar />
              <span>Authentic Taste</span>
            </Feature>
            <Feature>
              <FaStar />
              <span>Quick Service</span>
            </Feature>
          </Features>
        </TextContent>

        <CanvasContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ height: '100%' }}
          >
            <Hero3D />
          </motion.div>
        </CanvasContainer>
      </HeroContent>

      <ScrollIndicator
        onClick={scrollToMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span>Scroll to explore</span>
        <FaArrowDown />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;