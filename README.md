📦 Perfume Paradise – E-Commerce Website
Perfume Paradise is a frontend e-commerce web application built using React.
It allows users to browse perfume collections by brand, search products, add items to a cart, sign up / log in, and place orders through a checkout flow.
This project focuses on clean UI, smooth user experience, and realistic e-commerce functionality.
✨ Features
🛍️ Product Browsing
View perfume collections by brand
Browse individual product detail pages
Clean and responsive UI design
🔍 Search
Search perfumes or brands using the search bar
Search works across brand collections
🛒 Cart Functionality
Add products to cart
Remove products from cart
View total price
Cart count updates dynamically in the navbar
🔐 Authentication (Frontend Simulation)
User Sign Up
User Login
Logged-in user shown with profile avatar in navbar
Logout functionality
✅ Protected Checkout
Users must be logged in to proceed to checkout
Checkout form with:
Full Name
Address
Payment Method
Card validation:
Card number → numbers only
Expiry → MM/YY
CVV → 3 digits
Name on card → alphabets only
Order confirmation message on success
Cart clears after successful order
🎨 UI & Design
Luxury perfume-style background
Card-based layouts
Clean navbar with profile section
Responsive design
🛠️ Tech Stack
React
React Router DOM
CSS
Tailwind CSS (base setup)
JavaScript (ES6)
📁 Project Structure (Simplified)
src/
│
├── components/
│ ├── Navbar.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Brand.jsx
│ ├── Product.jsx
│ ├── Cart.jsx
│ ├── Login.jsx
│ └── Signup.jsx
│
├── context/
│ └── AuthContext.jsx
│
├── data/
│ └── perfumes.js
│
├── assets/
│ └── images / background
│
├── App.jsx
├── main.jsx
├── index.css
▶️ How to Run This Project Locally
Follow these steps:
1️⃣ Clone the repository
git clone https://github.com/your-username/perfume-paradise.git
2️⃣ Navigate to the project folder
cd perfume-paradise
3️⃣ Install dependencies
npm install
4️⃣ Start the development server
npm run dev
5️⃣ Open in browser
http://localhost:5173
