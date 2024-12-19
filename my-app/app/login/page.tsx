'use client'
import React from 'react'
import Image from 'next/image'
import LoginForm from '@/components/custom-ui/login-form'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Login Form Side */}
      <div className="flex w-1/2 items-center justify-center">
        <LoginForm />
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

