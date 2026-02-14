import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { celebrate } from "../utils/confetti"
import "./Login.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email)
    navigate("/")
    celebrate()
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-title">PERFUME PARADISE</div>
        <div className="login-subtitle">
          Sign in to your fragrance world
        </div>

        <form onSubmit={handleSubmit} className="login-form">
        <div className="login-field">
          <label className="login-label">Email</label>
          <input
            type="email"
            className="login-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="login-field">
          <label className="login-label">Password</label>
          <input
            type="password"
            className="login-input"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>

      <div className="login-footer">
        New here? <Link to="/signup">Sign Up</Link>
      </div>

      </div>
    </div>
  )
}
