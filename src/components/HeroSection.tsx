import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero">
      <h1>Welcome to Shopii</h1>
      <p>Explore the best products and not so cheap prices.</p>
      <Link href="/products" className="start-shopping">
        Start Shopping
      </Link>
    </section>
  )
}