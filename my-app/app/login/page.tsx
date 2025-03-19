'use client'
import React from 'react'
import LoginForm from '@/components/custom-ui/login-form'
import LoginSidePanel from '@/components/custom-ui/login-sidepanel'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Login Form Side */}
      <div className="flex w-1/2 items-center justify-center">
        <LoginForm />
      </div>

      {/* Welcome Image Side */}
      <div className="relative flex w-1/2 items-center justify-center bg-gray-100">
        <LoginSidePanel />
      </div>
    </div>
  )
};

