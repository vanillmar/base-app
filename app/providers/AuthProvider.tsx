'use client'
import React, { createContext, useContext, useState, type ReactNode } from 'react'
import type AuthContextType from './type/AuthContextType'
import type User from '../user/types/user'

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (userData: User) => {
    // Implement login logic here (e.g., API call)
    setUser(userData)
  }

  const logout = () => {
    // Implement logout logic here
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}