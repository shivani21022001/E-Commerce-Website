import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "./Navbar.css"

export default function Navbar({ cartCount, searchQuery, setSearchQuery }) {
  const { user, logout } = useAuth()

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          Perfume Paradise
        </Link>

        {/* Search */}
        <input
          type="text"
          placeholder="Search brands"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="navbar-search"
        />

        <div className="navbar-right">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link">
          Cart <span className="cart-count">{cartCount}</span>
        </Link>
      </div>

      {!user ? (
        /* NOT logged in */
        <Link to="/login" className="nav-link login-link">
          Login
        </Link>
      ) : (
        /* Logged in */
        <div className="nav-user">
        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <div className="profile-text">
          <span className="welcome-text">Welcome</span>
          <span className="profile-name">{user.name}</span>
        </div>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>

      </div>
    </nav>
  )
}
