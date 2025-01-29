'use client'

import { useCart } from "@/context/CartContext"
import { Suspense, useEffect } from 'react'
import dynamic from 'next/dynamic'

const CartContent = dynamic(() => import('./CartContent'), {
  ssr: false
})
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function CartPage() {
  const { user } = useAuth() ?? { user: null }
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <Suspense fallback={<div>Loading cart...</div>}>
      <CartContent />
    </Suspense>
  )
}