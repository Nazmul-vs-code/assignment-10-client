# ReSell Hub

A modern, secure marketplace platform for buying and selling tech products, featuring role-based authentication, integrated payments via Stripe, and a responsive dashboard.

## Live Links

- **Frontend**: https://reshell-client.vercel.app/
- **Backend**: https://resell-server-alpha.vercel.app/

## Project Overview

ReSell Hub is a full-stack e-commerce marketplace built with Next.js 15 and Express.js. The platform supports three user roles (Admin, Seller, Buyer) with distinct interfaces and permissions. Sellers can list and manage their products, buyers can browse and purchase items with secure Stripe payments, and admins have full control over the platform with analytics and user management.

## Key Features

### Authentication & Authorization
- **Role-Based Access Control**: Distinct interfaces for Admin, Seller, and Buyer
- **Secure Authentication**: Powered by Better Auth with Google OAuth and Email/Password support
- **JWT Security**: Server-side token verification for protected routes

### Marketplace Features
- **Product Listings**: Sellers can add, edit, and delete products
- **Product Approval System**: Admin reviews and approves products before they go live
- **Wishlist**: Buyers can save products to their wishlist with toggle functionality
- **Search & Filter**: Browse products by category with pagination

### Payment & Orders
- **Stripe Integration**: Secure payment processing for product purchases
- **Subscription Plans**: Pro subscription via Stripe for enhanced features
- **Order Management**: Track purchase history and seller orders

### Dashboard
- **Admin Dashboard**: User management, product approval, analytics, and transaction history
- **Seller Dashboard**: Manage products, view orders, and track performance
- **Buyer Dashboard**: View orders, manage wishlist, and payment history

### Additional Features
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Animated UI**: Smooth animations with Framer Motion
- **Toast Notifications**: Real-time feedback with React Hot Toast
- **Data Visualization**: Charts and graphs for analytics using Recharts

## Screenshots

![Homepage](public/images/logo.png)

> Add more screenshots here showing the dashboard, product pages, and checkout flow.

## Technologies Used

### Frontend
| Technology | Purpose |
|------------|---------|
| Next.js 15 | React framework with App Router |
| React 19 | UI library |
| Tailwind CSS 4 | Utility-first CSS framework |
| HeroUI | Component library |
| Framer Motion | Animation library |
| Recharts | Data visualization |
| Lucide React | Icon library |
| React Hot Toast | Toast notifications |
| Embla Carousel | Image carousel |

### Backend
| Technology | Purpose |
|------------|---------|
| Express.js | Web framework |
| MongoDB | NoSQL database |
| Better Auth | Authentication library |
| Jose | JWT verification |
| CORS | Cross-origin resource sharing |
| Dotenv | Environment variable management |

### Payments
| Technology | Purpose |
|------------|---------|
| Stripe | Payment processing |

## Dependencies

### Client Dependencies
```json
{
  "@better-auth/mongo-adapter": "^1.6.19",
  "@heroui/react": "^3.2.0",
  "@stripe/stripe-js": "^9.8.0",
  "better-auth": "^1.6.19",
  "embla-carousel-react": "^8.6.0",
  "lucide-react": "^1.20.0",
  "mongodb": "^7.3.0",
  "motion": "^12.40.0",
  "next": "^15.2.0",
  "react": "^19.0.0",
  "react-hot-toast": "^2.6.0",
  "recharts": "^3.8.1",
  "stripe": "^22.2.1"
}
```

### Server Dependencies
```json
{
  "cors": "^2.8.6",
  "dotenv": "^17.4.2",
  "express": "^5.2.1",
  "jose-cjs": "^6.2.3",
  "mongodb": "^7.3.0"
}
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance
- Stripe account for payment integration
- Google Cloud Console project for OAuth

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/resell-hub.git
   cd resell-hub
   ```

2. **Setup the Client**
   ```bash
   cd assignment-10-client
   npm install
   ```

3. **Setup the Server**
   ```bash
   cd ../Server
   npm install
   ```

### Environment Variables

#### Client (.env)
```env
# Better Auth
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Server URL
NEXT_PUBLIC_SERVER_URL=http://localhost:5000

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Image Hosting
NEXT_PUBLIC_IMGBB_KEY=your_imgbb_api_key
```

#### Server (.env)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
```

### Running the Application

1. **Start the Server**
   ```bash
   cd Server
   npm start
   ```
   Server will run on http://localhost:5000

2. **Start the Client**
   ```bash
   cd assignment-10-client
   npm run dev
   ```
   Client will run on http://localhost:3000

### Building for Production

```bash
# Client
cd assignment-10-client
npm run build
npm start

# Server
cd Server
npm start
```

## Project Structure

```
assignment-10/
├── assignment-10-client/          # Next.js Frontend
│   ├── src/
│   │   ├── app/                   # App Router pages
│   │   │   ├── dashboard/         # Dashboard routes
│   │   │   │   ├── admin/         # Admin dashboard
│   │   │   │   ├── seller/        # Seller dashboard
│   │   │   │   └── buyer/         # Buyer dashboard
│   │   │   ├── products/          # Product pages
│   │   │   ├── signin/            # Sign in page
│   │   │   └── signup/            # Sign up page
│   │   ├── components/            # Reusable components
│   │   │   ├── dashboard/         # Dashboard components
│   │   │   └── home/              # Homepage components
│   │   └── lib/                   # Utility functions
│   └── public/                    # Static assets
│
├── Server/                        # Express.js Backend
│   ├── index.js                   # Main server file
│   └── vercel.json                # Vercel deployment config
│
└── README.md
```

## API Endpoints

### Public Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get single product |

### Protected Routes (Auth Required)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/my-products` | Get seller's products |
| GET | `/my-orders` | Get seller's orders |
| GET | `/payments` | Get user payment history |
| POST | `/wishlist` | Add/remove wishlist item |
| GET | `/wishlist` | Get user wishlist |
| DELETE | `/wishlist/:id` | Remove from wishlist |

### Admin Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/admin/users` | Get all users |
| PATCH | `/admin/users/:id` | Update user status |
| DELETE | `/admin/users/:id` | Delete user |
| GET | `/admin/products` | Get all products |
| PATCH | `/admin/products/toggle-status/:id` | Approve/pend product |
| GET | `/admin/orders` | Get all orders |

### Seller Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/seller/product` | Add new product |
| PATCH | `/seller/product/:id` | Update product |
| DELETE | `/seller/product/:id` | Delete product |

## Security Configuration

This project follows industry-standard security practices:

- **Environment Variables**: Sensitive keys stored in `.env` files and managed via Vercel Secrets
- **Authentication**: Better Auth with secure, server-side generated secrets
- **JWT Security**: Tokens verified using jose library with JWKS endpoint
- **CORS**: Restricted to authorized frontend domains
- **Role-Based Access**: Middleware verifies user roles before granting access

## Deployment

### Vercel (Frontend)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Vercel (Backend)
1. Import the Server folder as a separate Vercel project
2. Configure environment variables
3. Set up MongoDB Atlas with Vercel's IP whitelist

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please reach out:
- **Project Link**: https://github.com/your-username/resell-hub
- **Live Demo**: https://reshell-client.vercel.app/
