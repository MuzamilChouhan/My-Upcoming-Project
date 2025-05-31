import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaClock, FaMapMarkerAlt, FaUtensils, FaStar } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const TextContent = styled(motion.div)``;

const AboutText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  &:first-of-type {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
  }
`;

const UrduQuote = styled.div`
  font-family: ${({ theme }) => theme.fonts.urdu};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  direction: rtl;
  font-weight: 600;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

const ImagePlaceholder = styled(motion.div)`
  height: 400px;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const StatTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const StatDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ValueIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.gradient.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const ValueTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
`;

const About: React.FC = () => {
  const stats = [
    {
      icon: <FaUsers />,
      title: "Happy Customers",
      description: "Serving the community of Layyah with delicious food and excellent service"
    },
    {
      icon: <FaClock />,
      title: "Fresh Daily",
      description: "All our food is prepared fresh daily using the finest ingredients"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Prime Location",
      description: "Conveniently located on College Road, in front of SastaBazar"
    }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: "Quality First",
      description: "We never compromise on the quality of our ingredients and preparation methods"
    },
    {
      icon: <FaUtensils />,
      title: "Authentic Taste",
      description: "Traditional Pakistani flavors prepared with authentic recipes and techniques"
    },
    {
      icon: <FaStar />,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority, and we strive to exceed your expectations"
    }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Food Valley
        </SectionTitle>

        <AboutContent>
          <TextContent
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AboutText>
              Welcome to Food Valley, where authentic Pakistani flavors meet modern dining experience 
              in the heart of Layyah, Punjab.
            </AboutText>
            
            <AboutText>
              Established with a passion for serving delicious and authentic Pakistani cuisine, 
              Food Valley has become a beloved destination for food lovers in Layyah. We take pride 
              in using fresh, high-quality ingredients and traditional cooking methods to bring you 
              the most authentic flavors.
            </AboutText>

            <AboutText>
              From our signature burgers and crispy samosas to aromatic biryanis and refreshing 
              beverages, every dish is prepared with love and attention to detail. Our commitment 
              to quality and customer satisfaction has made us a trusted name in the local food scene.
            </AboutText>

            <AboutText>
              Located conveniently on College Road, in front of SastaBazar, we welcome you to 
              experience the true taste of Pakistani hospitality and cuisine.
            </AboutText>
          </TextContent>

          <ImagePlaceholder
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            🏪
          </ImagePlaceholder>
        </AboutContent>

        <UrduQuote>
          "ہمارا مقصد آپ کو بہترین کھانا اور خدمات فراہم کرنا ہے"
        </UrduQuote>

        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
            </StatCard>
          ))}
        </StatsGrid>

        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Values
        </SectionTitle>

        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Container>
    </AboutSection>
  );
};

export default About;