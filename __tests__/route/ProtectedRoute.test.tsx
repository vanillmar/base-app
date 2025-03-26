import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { useAuth } from '@/app/providers/AuthProvider'
import { useRouter } from 'next/router'
import React from 'react'
import ProtectedRoute from '@/app/routes/ProtectedRoute'

// Mock useAuth and useRouter
jest.mock('../../app/providers/AuthProvider', () => ({
  useAuth: jest.fn()
}))
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

const mockReplace = jest.fn()

describe('ProtectedRoute', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({ replace: mockReplace })
  })

  it('redirects to login when user is not authenticated', () => {
    ;(useAuth as jest.Mock).mockReturnValue({ user: null })

    render(<ProtectedRoute component={() => <div>Protected Content</div>} roles={['admin']} />)

    expect(mockReplace).toHaveBeenCalledWith('/login')
  })

  it('renders component when user is authenticated and has required role', () => {
    ;(useAuth as jest.Mock).mockReturnValue({ user: { role: 'admin' } })

    const { getByText } = render(
      <ProtectedRoute component={() => <div>Protected Content</div>} roles={['admin']} />
    )

    expect(getByText('Protected Content')).toBeInTheDocument()
  })

  it('redirects to home when user does not have the required role', () => {
    ;(useAuth as jest.Mock).mockReturnValue({ user: { role: 'user' } })

    render(<ProtectedRoute component={() => <div>Protected Content</div>} roles={['admin']} />)

    expect(mockReplace).toHaveBeenCalledWith('/')
  })

  it('renders component when no roles are required', () => {
    ;(useAuth as jest.Mock).mockReturnValue({ user: { role: 'user' } })

    const { getByText } = render(
      <ProtectedRoute component={() => <div>Protected Content</div>} roles={undefined} />
    )

    expect(getByText('Protected Content')).toBeInTheDocument()
  })
})
