'use client'

import { createContext, useContext, useState, useEffect } from "react"

interface AuthContextType {
  user: string | null
  register: (email: string) => void
  login: (email: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

interface AuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('auth_user')
      if (storedUser) {
        setUser(storedUser)
      }
    }
  }, [])

  const login = (email: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_user', email)
      setUser(email)
    }
  }

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_user')
      setUser(null)
    }
  }

  const register = (email: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_user', email)
      setUser(email)
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)