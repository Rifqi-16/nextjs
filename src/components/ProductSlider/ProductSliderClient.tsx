'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Product } from '@/types/product'

interface ProductSliderClientProps {
  products: Product[]
}

export default function ProductSliderClient({ products }: ProductSliderClientProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="product-slider">
      <button className="slider-button left" onClick={() => scroll('left')}>←</button>
      <div className="slider-container" ref={sliderRef}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link href={`/products/${product.id}`}>
              <img src={product.images[0]} alt={product.title} />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">$ {product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button className="slider-button right" onClick={() => scroll('right')}>→</button>
    </div>
  )
}