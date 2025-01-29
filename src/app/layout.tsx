import '@/styles/globals.css'  
import { AuthProvider } from "@/context/AuthContext"
import { CartProvider } from "@/context/CartContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export async function generateMetadata() {
  return {
    title: 'Shopii - Your Online Store',
    description: 'Browse our collection of products with server-side rendering',
    openGraph: {
      title: 'Shopii',
      description: 'Browse our collection of products with server-side rendering',
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}