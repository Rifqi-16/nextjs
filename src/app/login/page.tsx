'use client'

import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <div className="auth-container">
      <LoginForm />
    </div>
  )
}