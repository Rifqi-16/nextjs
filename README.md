# Shopii

## Overview of the Application

Shopii is a fully functional e-commerce application built with Next.js where users can browse products, filter them by category, price range, and name, view detailed information for each product, and manage their shopping cart. The application is designed to provide a seamless shopping experience with an intuitive user interface and server-side rendering capabilities.

---

## Features Implemented

- **Product Listing**:
  - Display a comprehensive list of products with images, descriptions, and prices
  - Implement search functionality to filter products by name, price range, and category
  - Server-side rendering for better performance and SEO

- **Product Detail Page**:
  - Show detailed information for each product, including an image, name, description, and price
  - Provide an "Add to Cart" button to add products directly to the shopping cart
  - Dynamic routing with Next.js

- **Shopping Cart**:
  - View items added to the cart along with quantities and total price
  - Remove individual items or clear the entire cart
  - Confirm purchases with a "Buy" button
  - Persistent cart state using localStorage

- **Authentication**:
  - Login and Register pages for user authentication
  - Context-based state management for handling user sessions
  - Protected routes for authenticated users

- **Responsive Design**:
  - Ensure the application is fully responsive across different devices
  - Optimized images and fonts using Next.js built-in features

---

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/revou-fsse-oct24/milestone-2-Rifqi-16.git
   ```
2. Navigate to the project directory:
   ```bash
   cd milestone-2-Rifqi-16
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Build the project for production:
   ```bash
   npm run build
   ```
6. Start the production server:
   ```bash
   npm run serve
   ```

---

## Testing
The application uses:

- Jest for unit testing
- React Testing Library for component testing
- Next.js Testing Library for integration testing

1. Run Tests:
   ```bash
   npm test
   ```
2. For coverage report:
   ```bash
   npm test -- --coverage
   ```

---

## Technologies Used

- **Next.js** : For server-side rendering and routing
- **React** : For building the user interface
- **TypeScript** : To ensure type safety and better development experience
- **Jest & React Testing Library** : For unit and integration testing
- **Next.js Testing Library** : For testing Next.js specific features
- **Context API** : For state management (authentication and cart functionality)
- **CSS Modules** : For styling and responsive design
- **Local Storage** : For client-side state persistence
- **Netlify**: For deployment.
- **API**: Data is fetched from `https://api.escuelajs.co/api/v1/`.

---

## Demo Links

- **Live Demo**: [Deployed Application Link](https://shopi33.netlify.app/)
# nextjs
