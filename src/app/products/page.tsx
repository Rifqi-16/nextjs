import ProductList from '@/components/ProductList'
import { Suspense } from 'react'

async function getProducts() {
  try {
    const res = await fetch('https://api.escuelajs.co/api/v1/products', {
      cache: 'no-store',
      next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

async function getCategories() {
  try {
    const res = await fetch('https://api.escuelajs.co/api/v1/categories', {
      cache: 'no-store',
      next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error('Failed to fetch categories')
    return res.json()
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories()
  ])

  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductList initialProducts={products} initialCategories={categories} />
    </Suspense>
  )
}