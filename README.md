# Food Valley - Pakistani Restaurant Website

A complete, responsive website for Food Valley restaurant located in Layyah, Punjab, Pakistan. Built with React.js frontend and Node.js backend, featuring modern UI/UX design with Three.js 3D elements.

## 🍽️ About Food Valley

Food Valley is an authentic Pakistani restaurant serving traditional cuisine including:
- **Burgers**: Zinger Burger, Chicken Burger, Beef Burger, Fish Burger
- **Samosa**: Chicken Samosa, Beef Samosa, Vegetable Samosa, Cheese Samosa
- **Shawarma**: Chicken Shawarma, Beef Shawarma, Mixed Shawarma, Spicy Shawarma
- **Biryani**: Chicken Biryani, Mutton Biryani, Beef Biryani, Vegetable Biryani
- **Beverages**: Fresh Dodh, Dahi, Lassi, Tea, Fresh Juices (Available Fajar to Zuhr)

**Location**: In front of SastaBazar, College Road, Layyah, Punjab, Pakistan  
**Contact**: 0333-6203891, 0305-2755060  
**Hours**: Daily 8:00 AM - 11:00 PM

## 🚀 Features

### Frontend Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI/UX**: Clean, attractive design with Pakistani restaurant aesthetics
- **3D Elements**: Three.js integration for interactive visual elements
- **Smooth Animations**: Framer Motion for fluid page transitions
- **Multi-language Support**: English and Urdu text
- **Contact Integration**: WhatsApp and phone call functionality
- **Menu Showcase**: Detailed food item displays with categories
- **SEO Optimized**: Meta tags and structured data

### Backend Features
- **RESTful API**: Express.js server with CORS support
- **Menu Management**: Dynamic menu data with categories
- **Contact Form**: Message handling and validation
- **Error Handling**: Comprehensive error responses
- **CORS Configuration**: Proper cross-origin setup

### Technical Features
- **TypeScript**: Type-safe development
- **Styled Components**: CSS-in-JS styling
- **React Router**: Client-side routing
- **Responsive Breakpoints**: Mobile-first design
- **Performance Optimized**: Code splitting and lazy loading

## 🛠️ Technology Stack

### Frontend
- **React.js 19.1.0** - UI framework
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React Three.js renderer
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Icons** - Icon components

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Nodemailer** - Email functionality (ready for future use)

## 📁 Project Structure

```
My-Upcoming-Project/
├── food-valley-frontend/          # React.js frontend
│   ├── public/
│   │   ├── fonts/                 # Three.js fonts
│   │   └── index.html            # HTML template
│   ├── src/
│   │   ├── components/           # React components
│   │   │   ├── Header.tsx        # Navigation header
│   │   │   ├── Hero.tsx          # Hero section with 3D
│   │   │   ├── Menu.tsx          # Menu display
│   │   │   ├── About.tsx         # About section
│   │   │   ├── Contact.tsx       # Contact form
│   │   │   ├── Footer.tsx        # Footer component
│   │   │   └── ItemDetail.tsx    # Individual item details
│   │   ├── styles/               # Styling and themes
│   │   │   ├── theme.ts          # Design system
│   │   │   ├── GlobalStyles.ts   # Global CSS
│   │   │   └── styled.d.ts       # TypeScript declarations
│   │   ├── App.tsx               # Main app component
│   │   └── index.tsx             # Entry point
│   └── package.json              # Dependencies
├── food-valley-backend/           # Node.js backend
│   ├── server.js                 # Express server
│   └── package.json              # Dependencies
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd My-Upcoming-Project
   ```

2. **Install Backend Dependencies**
   ```bash
   cd food-valley-backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../food-valley-frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd food-valley-backend
   npm start
   ```
   Backend runs on: `http://localhost:12001`

2. **Start the Frontend Development Server**
   ```bash
   cd food-valley-frontend
   npm start
   ```
   Frontend runs on: `http://localhost:12000`

### Production Deployment

1. **Build the Frontend**
   ```bash
   cd food-valley-frontend
   npm run build
   ```

2. **Deploy Backend**
   - Configure environment variables
   - Set up production database (if needed)
   - Deploy to your preferred hosting service

## 🎨 Design System

### Color Palette
- **Primary**: #FF6B35 (Orange)
- **Secondary**: #F7931E (Golden)
- **Accent**: #E55A2B (Dark Orange)
- **Background**: #F8F9FA (Light Gray)
- **Text**: #2C3E50 (Dark Blue)

### Typography
- **Primary Font**: 'Inter', sans-serif
- **Secondary Font**: 'Poppins', sans-serif
- **Urdu Font**: 'Noto Nastaliq Urdu', serif

### Responsive Breakpoints
- **Mobile**: 480px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Wide**: 1200px

## 📱 Pages and Features

### Home Page
- Hero section with 3D food elements
- Restaurant introduction
- Featured menu items
- Call-to-action buttons

### Menu Page
- Categorized food items
- Search and filter functionality
- Item details with pricing
- Direct contact options

### About Page
- Restaurant story and values
- Team information
- Quality commitments
- Location highlights

### Contact Page
- Contact form with validation
- Restaurant information
- Opening hours
- WhatsApp integration
- Location details

### Item Detail Page
- Individual food item showcase
- Detailed descriptions
- Ordering options
- Related items

## 🔧 API Endpoints

### Menu Endpoints
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:category` - Get items by category
- `GET /api/item/:id` - Get specific item details

### Contact Endpoints
- `POST /api/contact` - Submit contact form

## 📞 Contact Information

**Food Valley Restaurant**
- **Address**: In front of SastaBazar, College Road, Layyah, Punjab, Pakistan
- **Phone**: 0333-6203891, 0305-2755060
- **Hours**: Daily 8:00 AM - 11:00 PM
- **Special**: Dodh & Dahi available from Fajar to Zuhr only

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for Food Valley restaurant. All rights reserved.

## 🙏 Acknowledgments

- Three.js community for 3D graphics support
- React community for excellent documentation
- Pakistani food culture for inspiration
- Layyah community for local insights

---

**Note**: This website does not offer home delivery. Please visit the restaurant for dine-in or call for takeaway orders.
