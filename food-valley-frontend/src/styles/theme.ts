export const theme = {
  colors: {
    primary: '#FF6B35', // Orange-red for Pakistani food theme
    secondary: '#F7931E', // Golden orange
    accent: '#C1272D', // Deep red
    background: '#FEFEFE',
    surface: '#FFFFFF',
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
      light: '#BDC3C7',
      white: '#FFFFFF'
    },
    success: '#27AE60',
    warning: '#F39C12',
    error: '#E74C3C',
    gradient: {
      primary: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
      secondary: 'linear-gradient(135deg, #C1272D 0%, #FF6B35 100%)',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }
  },
  fonts: {
    primary: "'Poppins', 'Roboto', sans-serif",
    secondary: "'Playfair Display', serif",
    urdu: "'Noto Nastaliq Urdu', serif"
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '50%'
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out'
  }
};