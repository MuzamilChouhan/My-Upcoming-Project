import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPhone, FaWhatsapp, FaClock, FaStar, FaUtensils } from 'react-icons/fa';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  availability?: string;
}

const DetailSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  min-height: 80vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(-5px);
  }
`;

const ItemContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const ImageSection = styled(motion.div)`
  position: relative;
`;

const ItemImage = styled.div<{ bgImage: string }>`
  height: 500px;
  background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), 
              url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
  }
`;

const PlaceholderImage = styled.div`
  height: 500px;
  background: ${({ theme }) => theme.colors.gradient.primary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  box-shadow: ${({ theme }) => theme.shadows.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 300px;
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const CategoryBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  left: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  text-transform: capitalize;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const AvailabilityBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.warning};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const InfoSection = styled(motion.div)``;

const ItemTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const ItemPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ItemDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Features = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  flex-wrap: wrap;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: ${({ theme }) => theme.colors.text.secondary};

  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const OrderSection = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const OrderTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const OrderButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const OrderButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  flex: 1;
  background: ${({ variant, theme }) => 
    variant === 'primary' ? theme.colors.gradient.primary : '#25D366'};
  color: white;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    background: ${({ variant }) => 
      variant === 'primary' ? '#e55a2b' : '#128C7E'};
  }
`;

const ContactInfo = styled.div`
  background: #f8f9fa;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

const ContactText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['4xl']};
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<MenuItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchItemDetail();
  }, [id]);

  const fetchItemDetail = async () => {
    try {
      const response = await fetch(`https://work-2-iiidywtgjxyxcmrq.prod-runtime.all-hands.dev/api/item/${id}`);
      if (response.ok) {
        const data = await response.json();
        setItem(data);
      } else {
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching item detail:', error);
      setError(true);
      setLoading(false);
    }
  };

  const handleCall = () => {
    window.open('tel:03336203891', '_self');
  };

  const handleWhatsApp = () => {
    if (item) {
      const message = `Hi! I'm interested in ordering ${item.name} (${item.price}). Please let me know the availability and preparation time.`;
      const phoneNumber = '03336203891';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const getPlaceholderEmoji = (category: string) => {
    const placeholders: { [key: string]: string } = {
      burgers: '🍔',
      samosa: '🥟',
      shawarma: '🌯',
      biryani: '🍛',
      beverages: '🥛'
    };
    return placeholders[category] || '🍽️';
  };

  if (loading) {
    return (
      <DetailSection>
        <Container>
          <LoadingSpinner>Loading item details...</LoadingSpinner>
        </Container>
      </DetailSection>
    );
  }

  if (error || !item) {
    return (
      <DetailSection>
        <Container>
          <BackButton to="/menu">
            <FaArrowLeft />
            Back to Menu
          </BackButton>
          <ErrorMessage>
            Item not found. Please check the menu for available items.
          </ErrorMessage>
        </Container>
      </DetailSection>
    );
  }

  return (
    <DetailSection>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BackButton to="/menu">
            <FaArrowLeft />
            Back to Menu
          </BackButton>

          <ItemContent>
            <ImageSection
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <PlaceholderImage>
                {getPlaceholderEmoji(item.category)}
              </PlaceholderImage>
              
              <CategoryBadge>{item.category}</CategoryBadge>
              
              {item.availability && (
                <AvailabilityBadge>
                  <FaClock />
                  {item.availability}
                </AvailabilityBadge>
              )}
            </ImageSection>

            <InfoSection
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ItemTitle>{item.name}</ItemTitle>
              <ItemPrice>{item.price}</ItemPrice>
              <ItemDescription>{item.description}</ItemDescription>

              <Features>
                <Feature>
                  <FaStar />
                  <span>Fresh Ingredients</span>
                </Feature>
                <Feature>
                  <FaUtensils />
                  <span>Authentic Recipe</span>
                </Feature>
                <Feature>
                  <FaClock />
                  <span>Quick Service</span>
                </Feature>
              </Features>

              <OrderSection>
                <OrderTitle>Order This Item</OrderTitle>
                
                <OrderButtons>
                  <OrderButton variant="primary" onClick={handleCall}>
                    <FaPhone />
                    Call to Order
                  </OrderButton>
                  <OrderButton variant="secondary" onClick={handleWhatsApp}>
                    <FaWhatsapp />
                    WhatsApp Order
                  </OrderButton>
                </OrderButtons>

                <ContactInfo>
                  <ContactText>
                    <strong>Note:</strong> We don't offer home delivery. Please call us to place your order 
                    for pickup or visit our restaurant at College Road, Layyah for dine-in.
                  </ContactText>
                </ContactInfo>
              </OrderSection>
            </InfoSection>
          </ItemContent>
        </motion.div>
      </Container>
    </DetailSection>
  );
};

export default ItemDetail;