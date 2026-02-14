import { useParams, Link } from "react-router-dom"
import { perfumes } from "../data/perfumes"
import "./Product.css"

export default function Product({ addToCart }) {
  const { id } = useParams()
  const product = perfumes.find((p) => p.id === Number(id))

  if (!product) {
    return <div className="product-not-found">Product not found</div>
  }

  return (
    <div className="product-page">

      {/* Back link */}
      <Link
      to={`/brand/${product.brand}`}
      className="back-link"
    >
      ← Back to {product.brand} Collection
    </Link>


      <div className="product-container">

        {/* Image */}
        <div className="product-image-box">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Details */}
        <div className="product-info">
          <div className="product-brand">{product.brand}</div>

          <h1 className="product-name">{product.name}</h1>

          <div className="product-rating">
            ⭐ {product.rating}
            <span>({product.reviews} reviews)</span>
          </div>

          <div className="product-price">${product.price}</div>

          <p className="product-description">
            A luxurious fragrance crafted with refined notes and lasting elegance.
            Perfect for everyday wear and special occasions.
          </p>

          <button
            className="product-add-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
