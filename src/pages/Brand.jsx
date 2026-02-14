import { useParams, Link } from "react-router-dom"
import { perfumes } from "../data/perfumes"
import "./Brand.css"

export default function Brand({ addToCart, searchQuery }) {
  const { brandName } = useParams()

  // Filter perfumes by brand and search
  const brandPerfumes = perfumes.filter(
    (p) =>
      p.brand === brandName &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="brand-container">
      <h1 className="brand-title">{brandName} Collection</h1>

      <div className="brand-grid">
        {brandPerfumes.map((p) => (
          <div key={`${p.id}-${p.name}`} className="brand-card">
            
            <Link to={`/product/${p.id}`} className="brand-image-wrap">
              <img src={p.image} alt={p.name} />
            </Link>

            <div className="brand-body">
              <h3 className="brand-name">{p.name}</h3>

              <div className="brand-price">${p.price}</div>

              <div className="brand-rating">
                ⭐ <span>{p.rating}</span>
                <span className="brand-reviews">({p.reviews})</span>
              </div>

              <button
                className="brand-add-btn"
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
