import { useState, useRef } from "react"
import { useAuth } from "../context/AuthContext"
import { celebrate } from "../utils/confetti"
import "./Cart.css"

export default function Cart({ cart, removeFromCart, clearCart }) {
  const [showCheckout, setShowCheckout] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")
  const { user } = useAuth()
  const checkoutRef = useRef(null)

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0) {
    return <div className="cart-empty">Order Placed and Your cart is empty</div>
  }

  return (
    <div className="cart-wrapper">
      <h1 className="cart-title">Your Cart</h1>

      {/* Cart Items */}
      <div className="cart-list">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-item-info">
              <div className="cart-item-brand">{item.brand}</div>
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">${item.price}</div>
            </div>

            <button
              className="cart-remove-btn"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary">
        <div className="cart-total">
          Total: <span>${total}</span>
        </div>

        <button
        className="checkout-btn"
        onClick={() => {
          setShowCheckout(true)

          setTimeout(() => {
            checkoutRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }, 100)
        }}
      >
        Proceed to Checkout
      </button>

      </div>

      {/* Checkout Section */}
      {showCheckout && (
        <div ref={checkoutRef} className="checkout-section">
          <h2 className="checkout-title">Checkout</h2>

          <form
          className="checkout-form"
          onSubmit={(e) => {
            e.preventDefault()

            if (!paymentMethod) {
              alert("Please select a payment method")
              return
            }

            if (paymentMethod === "card") {
              alert("Payment Successful! Order placed 🎉")
              celebrate()
            } else {
              alert("Order placed successfully!")
              celebrate()
            }
            clearCart()
            setShowCheckout(false)
            setPaymentMethod("")
          }}
        >

            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Shipping Address" required />

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="card">Credit / Debit Card</option>
              <option value="cod">Cash on Delivery</option>
            </select>

            {/* Card Details */}
            {paymentMethod === "card" && (
              <>
                <input
                type="text"
                placeholder="Card Number"
                inputMode="numeric"
                maxLength="16"
                pattern="[0-9]{16}"
                required
                onChange={(e) =>
                  (e.target.value = e.target.value.replace(/\D/g, ""))
                }
              />


                <input
                  type="text"
                  placeholder="Name on Card"
                  required
                />

                <div className="card-row">
                  <input
                  type="text"
                  placeholder="Expiry (MM/YY)"
                  maxLength="5"
                  required
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "")
                    if (value.length >= 3) {
                      value = value.slice(0, 2) + "/" + value.slice(2, 4)
                    }
                    e.target.value = value
                  }}
                />

                  <input
                  type="password"
                  placeholder="CVV"
                  inputMode="numeric"
                  maxLength="3"
                  pattern="[0-9]{3}"
                  required
                  onChange={(e) =>
                    (e.target.value = e.target.value.replace(/\D/g, ""))
                  }
                />

                </div>
              </>
            )}

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
