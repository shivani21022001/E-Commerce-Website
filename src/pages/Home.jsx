import { Link } from "react-router-dom"
import { perfumes } from "../data/perfumes"
import { useState } from "react"
import "./Home.css"

const brandImages = {
  "Chanel": "https://www.chanel.com/puls-img/1760038661609-ratio-m-majorpush_3200x3000.jpg",
  "Dior": "https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Library-Sites-DiorSharedLibrary/default/dw63407d42/images/beauty/09-XMAS2025/PLP-FRAGRANCES/POSTER_DIOR_XMAS_CAPSULE_LA_COLLECTION_PRIVEE_4x5.jpg?sw=420",
  "YSL": "https://www.yslbeauty.com/dw/image/v2/BDCR_PRD/on/demandware.static/-/Sites-NGYSL-ILM-Library/default/dwc1702c03/images/articles/libre-fragrance/section1-visual.jpg",
  "Gucci": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsrFrZOdKPKh0wMpmUGzT40XGL-45pNSGA0w&s",
  "Guess": "https://images.squarespace-cdn.com/content/v1/642f1e6a02cb0f705acf5ae5/e5d85d6e-f697-40b5-b15e-da5aa03e6e36/BELLAMagazine-GUESSAMOREFragranceCollection.jpeg",
  "Calvin Klein": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKD1JT-S6LPEnl75tEtEPQtI3kePNfgVV3_Q&s",
  "Bella Vita": "https://images.meesho.com/images/products/384744383/kdyg6_512.webp?width=512",
  "Victoria's Secret": "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b005ed0b-35f8-4cb3-b7c2-2aa7521ba182.__CR0,0,1200,900_PT0_SX600_V1___.jpg",
  "Tom Ford": "https://bizweb.dktcdn.net/100/106/604/articles/19d4533e56814d247f1a38f8fb208927.jpg?v=1702817468707",
  "Versace": "https://colognecurators.com/cdn/shop/files/CologneProductPhotos_8.jpg?v=1762181927",
  "Valentino": "https://i.ytimg.com/vi/3KszPmW0vcg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDZ4ZBZwWQjqO8l3-wRyElI8nYnXQ",
  "More Brands": "https://images.squarespace-cdn.com/content/v1/5eff732598448a4a7bad6a8c/1643074106279-OBJV3K41TDNFJCVWYE4U/IMG_9323+2.JPG",
}

export default function Home({ searchQuery }) {

  // Get unique brands
  const filteredPerfumes = perfumes.filter(
  (p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
)

const brands = [...new Set(filteredPerfumes.map(p => p.brand))]


  return (
    <div className="home-container">
      <div className="home-title">Explore Perfume Collections</div>

      <div className="brand-collection">
        {brands.map((brand) => (
          <Link
            key={brand}
            to={`/brand/${brand}`}
            className="brand-tile"
          >
            <img
            src={brandImages[brand] || filteredPerfumes.find(p => p.brand === brand)?.image}
            alt={brand}
            />
            <div className="brand-overlay">{brand}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
