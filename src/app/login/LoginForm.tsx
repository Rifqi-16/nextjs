'use client'

import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth() ?? { login: () => {} }
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email)
      router.push("/")
    } catch (error) {
      console.error("Login failed:", error)
    }
  }

  return (
    <div className="auth-card">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form" onSubmit={handleSubmit} role="form">
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="auth-button" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}