'use client'

import Link from 'next/link'
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const { user, logout } = useAuth() ?? { user: null, logout: () => {} }

  return (
    <nav className="navbar">
      <h1>Shopii</h1>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        {user ? (
          <>
            <span className="user">Welcome, {user}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}