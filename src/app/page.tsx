import HeroSection from '@/components/HeroSection'
import ProductSlider from '@/components/ProductSlider'
import { getProducts } from '@/utils/api'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

export default async function Home() {
  const products = await getProducts()

  return (
    <main>
      <Suspense fallback={<div>Loading hero...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductSlider products={products} />
      </Suspense>
    </main>
  )
}