import { Product } from '@/types/product'
import dynamic from 'next/dynamic'

const ProductSliderClient = dynamic(() => import('./ProductSliderClient'), {
  ssr: true,
  loading: () => <div>Loading slider...</div>
})

export default function ProductSlider({ products }: { products: Product[] }) {
  return <ProductSliderClient products={products} />
}