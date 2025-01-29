import ProductDetail from './ProductDetail'
import { Product } from '@/types/product'

export async function generateStaticParams() {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    const products: Product[] = await response.json()

    return products.map((product) => ({
      id: product.id.toString()
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
    .then(res => res.json())

  return <ProductDetail product={product} />
}