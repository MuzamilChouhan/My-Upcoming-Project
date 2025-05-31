export const theme = {
  colors: {
    primary: '#FF6B35', // Orange-red for Pakistani food theme
    secondary: '#F7931E', // Golden orange
    accent: '#C1272D', // Deep red
    pakistani: {
      green: '#01411C', // Pakistan flag green
      lightGreen: '#228B22',
      saffron: '#FF9933',
      cream: '#FFF8DC',
      gold: '#FFD700'
    },
    background: '#FEFEFE',
    surface: '#FFFFFF',
    surfaceElevated: '#FFFFFF',
    glass: 'rgba(255, 255, 255, 0.25)',
    glassDark: 'rgba(0, 0, 0, 0.1)',
    border: '#E1E8ED',
    borderLight: '#F1F3F4',
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
      light: '#BDC3C7',
      white: '#FFFFFF',
      dark: '#1A1A1A'
    },
    success: '#27AE60',
    warning: '#F39C12',
    error: '#E74C3C',
    info: '#3498DB',
    gradient: {
      primary: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
      secondary: 'linear-gradient(135deg, #C1272D 0%, #FF6B35 100%)',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      pakistani: 'linear-gradient(135deg, #228B22 0%, #01411C 100%)',
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)',
      hero: 'linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(247, 147, 30, 0.8) 100%)'
    }
  },
  fonts: {
    primary: "'Inter', 'Poppins', sans-serif",
    secondary: "'Playfair Display', serif",
    urdu: "'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', serif",
    display: "'Playfair Display', serif"
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
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem'
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
    ultrawide: '1440px'
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    xl: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
    glass: '0 8px 32px rgba(31, 38, 135, 0.37)',
    neumorphism: '20px 20px 60px #d1d9e6, -20px -20px 60px #ffffff',
    inset: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    glow: '0 0 20px rgba(255, 107, 53, 0.3)'
  },
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
    full: '9999px'
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out'
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060
  },
  blur: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px'
  }
};