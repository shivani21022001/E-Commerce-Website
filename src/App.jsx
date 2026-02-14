import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Brand from "./pages/Brand"
import Signup from "./pages/Signup"



export default function App() {
  const [cart, setCart] = useState([])
  const clearCart = () => {
    setCart([])
  }
  const [searchQuery, setSearchQuery] = useState("")

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        cartCount={cart.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/brand/:brandName"
          element={<Brand addToCart={addToCart} searchQuery={searchQuery} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
    </div>
  )
}
