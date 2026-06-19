ReSell Hub

Project Purpose: A modern, secure marketplace platform for buying and selling products, featuring role-based authentication, integrated payments via Stripe, and a responsive dashboard.

Live Links
Frontend: https://reshell-client.vercel.app/

Backend: https://resell-server-alpha.vercel.app/

Key Features
Role-Based Access: Distinct interfaces and permissions for Buyers and Sellers.

Secure Authentication: Powered by better-auth with Google Social Login and Email/Password support.

Stripe Integration: Seamless payment processing with automated transaction management.

Responsive Dashboard: Mobile-first design for managing orders, products, and profiles.

Private Routes: Secure route protection for authenticated users and role-specific access.

NPM Packages Used
Frontend: next, better-auth, @heroui/react, framer-motion, lucide-react, react-hot-toast

Backend: express, better-auth, mongodb, stripe, cors, jsonwebtoken

Security Configuration
This project follows industry-standard security practices:

Environment Variables: Sensitive keys (MongoDB URI, Stripe Keys, Google OAuth Credentials) are stored in .env files and managed via Vercel Secrets.

Authentication: better-auth is utilized with a secure, server-side generated BETTER_AUTH_SECRET.

JWT Security: JWT tokens are signed using a robust, environment-variable-stored secret key to prevent unauthorized access.

CORS: Cross-Origin Resource Sharing is restricted to authorized frontend domains to prevent unauthorized API calls.