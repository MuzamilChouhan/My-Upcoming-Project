import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaClock, FaHeart, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: ${({ theme }) => theme.spacing['3xl']} 0 ${({ theme }) => theme.spacing.xl};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    text-align: center;
  }
`;

const FooterSection = styled(motion.div)``;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.sm};
  color: white;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Description = styled.p`
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const UrduText = styled.p`
  font-family: ${({ theme }) => theme.fonts.urdu};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  direction: rtl;
  font-weight: 600;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.secondary};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: #bdc3c7;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }

  svg {
    color: ${({ theme }) => theme.colors.secondary};
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

const ContactText = styled.div`
  line-height: 1.5;
`;

const PhoneLink = styled.a`
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const NavLink = styled(Link)`
  color: #bdc3c7;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bdc3c7;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.gradient.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #bdc3c7;
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const QuickOrder = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const QuickOrderButton = styled.a`
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const message = "Hi! I'd like to place an order from Food Valley.";
    const phoneNumber = '03336203891';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Logo>
              <LogoIcon>FV</LogoIcon>
              Food Valley
            </Logo>
            <Description>
              Experience the authentic taste of Pakistani cuisine in the heart of Layyah. 
              We serve fresh, delicious food with traditional flavors and modern presentation.
            </Description>
            <UrduText>
              لذیذ کھانے کا بہترین تجربہ
            </UrduText>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink onClick={handleWhatsApp} aria-label="WhatsApp">
                <FaWhatsapp />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Quick Links</SectionTitle>
            <NavList>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/menu">Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </NavList>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Menu Categories</SectionTitle>
            <NavList>
              <NavItem>
                <NavLink to="/menu">Burgers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/menu">Samosa</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/menu">Shawarma</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/menu">Biryani</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/menu">Beverages</NavLink>
              </NavItem>
            </NavList>
          </FooterSection>

          <FooterSection
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Contact Info</SectionTitle>
            
            <ContactItem>
              <FaPhone />
              <ContactText>
                <PhoneLink href="tel:03336203891">0333-6203891</PhoneLink><br />
                <PhoneLink href="tel:03052755060">0305-2755060</PhoneLink>
              </ContactText>
            </ContactItem>

            <ContactItem>
              <FaMapMarkerAlt />
              <ContactText>
                In front of SastaBazar,<br />
                College Road, Layyah,<br />
                Punjab, Pakistan
              </ContactText>
            </ContactItem>

            <ContactItem>
              <FaClock />
              <ContactText>
                Daily: 8:00 AM - 11:00 PM<br />
                <small>Dodh & Dahi: Fajar to Zuhr</small>
              </ContactText>
            </ContactItem>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {currentYear} Food Valley. Made with <FaHeart /> in Layyah, Pakistan
          </Copyright>
          
          <QuickOrder>
            <QuickOrderButton href="tel:03336203891">
              <FaPhone />
              Call Now
            </QuickOrderButton>
            <QuickOrderButton onClick={handleWhatsApp}>
              <FaWhatsapp />
              WhatsApp
            </QuickOrderButton>
          </QuickOrder>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;