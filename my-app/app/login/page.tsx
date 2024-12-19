'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useAuth } from '@/app/providers/AuthProvider'
import { getFirstNameFromEmail } from '@/lib/utils'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      login({
        id: 1,
        name: getFirstNameFromEmail(email),
        email,
        role: '',
        canSend: false,
        channels: [],
        avatarUrl: ''
      }) 
      router.push('/dashboard')
    } catch (err) {
      setError('Failed to login. Please check your credentials.')
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Login Form Side */}
      <div className="flex w-1/2 items-center justify-center">
        <Card className="w-[350px]">
          <form>
            <CardHeader>
              <CardTitle>{process.env.NEXT_PUBLIC_APP_NAME}</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      placeholder="Enter your email" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      placeholder="Enter your password" 
                      type="password" 
                      value={password} 
                      onChange={(e)=> setPassword(e.target.value)}
                      />
                  </div>
                </div>
            </CardContent>
            <CardFooter>git 
              <Button
                type="button"
                onClick={handleLogin}
                className="w-full"
              >Log In</Button>
            </CardFooter>
          </form>
          {error && <p>{error}</p>}
        </Card>
      </div>

      {/* Welcome Image Side */}
      <div className="relative flex w-1/2 items-center justify-center bg-gray-100">
        <Image
          src="/placeholder.svg?height=600&width=600"
          alt="Welcome to our application"
          width={600}
          height={600}
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Welcome to {process.env.NEXT_PUBLIC_APP_NAME}</h1>
        </div>
      </div>
    </div>
  )
};

