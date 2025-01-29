'use client'

import { useCart } from "@/context/CartContext"

interface Product {
  id: number
  title: string
  description: string
  price: number
  images: string[]
}

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart()

  const handleBuy = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1
    })
    alert("Thank you for your purchase!")
  }

  return (
    <div className="product-container">
      <div className="product-card">
        <img src={product.images[0]} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <div className="product-buttons">
          <button onClick={() => addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: 1
          })}>Add to Cart</button>
          <button onClick={handleBuy} className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  )
}