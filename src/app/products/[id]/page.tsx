import ProductDetail from './ProductDetail'
import { Product } from '@/types/product'

// Remove PageProps import as it's not needed in App Router
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

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params
  const product = await fetch(`https://api.escuelajs.co/api/v1/products/${resolvedParams.id}`)
    .then(res => res.json())

  return <ProductDetail product={product} />
}