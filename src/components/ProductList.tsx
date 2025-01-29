'use client'

import { useState } from "react"
import Link from 'next/link'
import { useCart } from "@/context/CartContext"

interface Product {
  id: number
  title: string
  description: string
  price: number
  images: string[]
  category: {
    name: string
  }
}

interface Category {
  id: number
  name: string
}

interface ProductListProps {
  initialProducts: Product[]
  initialCategories: Category[]
}

export default function ProductList({ initialProducts, initialCategories }: ProductListProps) {
  const [filter, setFilter] = useState({
    title: "",
    minPrice: "",
    maxPrice: "",
    category: "",
  })
  const { addToCart } = useCart()

  const filteredProducts = initialProducts.filter((product) => {
    return (
      (!filter.title ||
        product.title.toLowerCase().includes(filter.title.toLowerCase())) &&
      (!filter.minPrice || product.price >= parseFloat(filter.minPrice)) &&
      (!filter.maxPrice || product.price <= parseFloat(filter.maxPrice)) &&
      (!filter.category || product.category.name === filter.category)
    )
  })

  return (
    <div className="container">
      <aside className="sidebar">
        <h3>Categories</h3>
        <div className="filter">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          >
            <option value="">All Categories</option>
            {initialCategories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="filter">
          <label htmlFor="title">Search Product With Name</label>
          <input
            id="title"
            type="text"
            placeholder="Type a product..."
            onChange={(e) => setFilter({ ...filter, title: e.target.value })}
          />
        </div>
        <div className="filter">
          <label>Price Range:</label>
          <input
            type="number"
            placeholder="Min Price"
            onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })}
          />
          <input
            type="number"
            placeholder="Max Price"
            onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
          />
        </div>
      </aside>
      
      <div className="grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <Link href={`/products/${product.id}`}>
                <img src={product.images[0]} alt={product.title} />
                <h2>{product.title}</h2>
                <p className="description">{product.description}</p>
                <p>Price: ${product.price}</p>
              </Link>
              <div className="product-buttons">
                <button onClick={() => addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.images[0],
                  quantity: 1
                })}>Add to Cart</button>
                <button 
                  className="buy-button"
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      image: product.images[0],
                      quantity: 1
                    });
                    alert("Thank you for your purchase!");
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  )
}