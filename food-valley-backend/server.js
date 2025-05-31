const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 12001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://work-1-iiidywtgjxyxcmrq.prod-runtime.all-hands.dev'],
  credentials: true
}));
app.use(express.json());

// Menu data
const menuData = {
  burgers: [
    {
      id: 1,
      name: "Chicken Burger",
      description: "Juicy grilled chicken with fresh vegetables and special sauce",
      price: "Rs. 350",
      image: "/images/chicken-burger.jpg",
      category: "burgers"
    },
    {
      id: 2,
      name: "Beef Burger",
      description: "Premium beef patty with cheese and crispy lettuce",
      price: "Rs. 450",
      image: "/images/beef-burger.jpg",
      category: "burgers"
    },
    {
      id: 3,
      name: "Zinger Burger",
      description: "Spicy crispy chicken with hot sauce and fresh salad",
      price: "Rs. 400",
      image: "/images/zinger-burger.jpg",
      category: "burgers"
    },
    {
      id: 4,
      name: "Fish Burger",
      description: "Fresh fish fillet with tartar sauce and vegetables",
      price: "Rs. 380",
      image: "/images/fish-burger.jpg",
      category: "burgers"
    }
  ],
  samosa: [
    {
      id: 5,
      name: "Chicken Samosa",
      description: "Crispy triangular pastry filled with spiced chicken",
      price: "Rs. 25",
      image: "/images/chicken-samosa.jpg",
      category: "samosa"
    },
    {
      id: 6,
      name: "Beef Samosa",
      description: "Traditional samosa with seasoned beef filling",
      price: "Rs. 30",
      image: "/images/beef-samosa.jpg",
      category: "samosa"
    },
    {
      id: 7,
      name: "Vegetable Samosa",
      description: "Mixed vegetables with aromatic spices",
      price: "Rs. 20",
      image: "/images/veg-samosa.jpg",
      category: "samosa"
    },
    {
      id: 8,
      name: "Cheese Samosa",
      description: "Crispy samosa filled with melted cheese",
      price: "Rs. 35",
      image: "/images/cheese-samosa.jpg",
      category: "samosa"
    }
  ],
  shawarma: [
    {
      id: 9,
      name: "Chicken Shawarma",
      description: "Tender chicken wrapped in fresh naan with garlic sauce",
      price: "Rs. 280",
      image: "/images/chicken-shawarma.jpg",
      category: "shawarma"
    },
    {
      id: 10,
      name: "Beef Shawarma",
      description: "Marinated beef with tahini sauce and fresh vegetables",
      price: "Rs. 320",
      image: "/images/beef-shawarma.jpg",
      category: "shawarma"
    },
    {
      id: 11,
      name: "Mixed Shawarma",
      description: "Combination of chicken and beef with special sauce",
      price: "Rs. 350",
      image: "/images/mixed-shawarma.jpg",
      category: "shawarma"
    },
    {
      id: 12,
      name: "Falafel Shawarma",
      description: "Crispy falafel with hummus and fresh salad",
      price: "Rs. 250",
      image: "/images/falafel-shawarma.jpg",
      category: "shawarma"
    }
  ],
  biryani: [
    {
      id: 13,
      name: "Chicken Biryani",
      description: "Aromatic basmati rice with tender chicken and traditional spices",
      price: "Rs. 450",
      image: "/images/chicken-biryani.jpg",
      category: "biryani"
    },
    {
      id: 14,
      name: "Beef Biryani",
      description: "Rich and flavorful beef biryani with saffron rice",
      price: "Rs. 550",
      image: "/images/beef-biryani.jpg",
      category: "biryani"
    },
    {
      id: 15,
      name: "Mutton Biryani",
      description: "Premium mutton with fragrant basmati rice",
      price: "Rs. 650",
      image: "/images/mutton-biryani.jpg",
      category: "biryani"
    },
    {
      id: 16,
      name: "Vegetable Biryani",
      description: "Mixed vegetables with aromatic rice and spices",
      price: "Rs. 350",
      image: "/images/veg-biryani.jpg",
      category: "biryani"
    }
  ],
  beverages: [
    {
      id: 17,
      name: "Fresh Dodh (Milk)",
      description: "Fresh buffalo milk - Available from Fajar to Zuhr",
      price: "Rs. 80",
      image: "/images/fresh-milk.jpg",
      category: "beverages",
      availability: "Fajar to Zuhr"
    },
    {
      id: 18,
      name: "Dahi (Yogurt)",
      description: "Fresh homemade yogurt - Available from Fajar to Zuhr",
      price: "Rs. 60",
      image: "/images/dahi.jpg",
      category: "beverages",
      availability: "Fajar to Zuhr"
    },
    {
      id: 19,
      name: "Lassi",
      description: "Traditional sweet yogurt drink",
      price: "Rs. 100",
      image: "/images/lassi.jpg",
      category: "beverages"
    },
    {
      id: 20,
      name: "Fresh Juice",
      description: "Seasonal fresh fruit juices",
      price: "Rs. 120",
      image: "/images/fresh-juice.jpg",
      category: "beverages"
    }
  ]
};

// Routes
app.get('/api/menu', (req, res) => {
  res.json(menuData);
});

app.get('/api/menu/:category', (req, res) => {
  const category = req.params.category;
  if (menuData[category]) {
    res.json(menuData[category]);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

app.get('/api/item/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  let foundItem = null;
  
  Object.values(menuData).forEach(category => {
    const item = category.find(item => item.id === itemId);
    if (item) foundItem = item;
  });
  
  if (foundItem) {
    res.json(foundItem);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, message, items } = req.body;
    
    // Here you would typically send an email or save to database
    // For now, we'll just log the order
    console.log('New Order Received:', {
      name,
      phone,
      message,
      items,
      timestamp: new Date().toISOString()
    });
    
    res.json({ 
      success: true, 
      message: 'Order received! We will contact you shortly on the provided phone number.' 
    });
  } catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing your order. Please try again.' 
    });
  }
});

// Restaurant info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    name: "Food Valley",
    address: "Food Valley, In front of SastaBazar, College Road, Layyah, Punjab, Pakistan",
    phones: ["0333-6203891", "0305-2755060"],
    location: "Layyah, Punjab, Pakistan",
    hours: {
      general: "Daily 8:00 AM - 11:00 PM",
      special: "Dodh & Dahi available from Fajar to Zuhr only"
    },
    services: ["Dine-in", "Takeaway", "Online Ordering"],
    note: "We don't offer home delivery. Please visit our restaurant or call for takeaway orders."
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Food Valley Backend Server running on port ${PORT}`);
});