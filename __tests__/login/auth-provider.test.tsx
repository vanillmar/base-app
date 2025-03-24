
import '@testing-library/jest-dom'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { AuthProvider, useAuth } from '@/app/providers/AuthProvider'

import React from 'react'

const TestAuthComponent = () => {
    const { user, login, logout } = useAuth()

    return (
        <div>
          <p data-testid="user">{user ? user.name : 'No user logged in'}</p>
          <button onClick={() => login({ id: 2, name: 'John Doe', email: 'john@example.com', role: '', avatarUrl: '' })} data-testid="login-button">
            Login
          </button>
          <button onClick={logout} data-testid="logout-button">Logout</button>
        </div>
      )
}

describe('AuthProvider', () => {
    it('renders without crashing', () => {
        render(
          <AuthProvider>
            <TestAuthComponent />
          </AuthProvider>
        )
        expect(screen.getByTestId('user')).toHaveTextContent('No user logged in')
      })
    
      it('logs in a user', async () => {
        render(
          <AuthProvider>
            <TestAuthComponent />
          </AuthProvider>
        )
    
        const loginButton = screen.getByTestId('login-button')
        await act(async () => {
            fireEvent.click(loginButton)
        })
        expect(screen.getByTestId('user')).toHaveTextContent('John Doe')
      })
    
      it('logs out a user', async () => {
        render(
          <AuthProvider>
            <TestAuthComponent />
          </AuthProvider>
        )
    
        const loginButton = screen.getByTestId('login-button')
        
        await act(async () => {
            fireEvent.click(loginButton)
        })
    
        const logoutButton = screen.getByTestId('logout-button')
        
        await act(async () => {
            fireEvent.click(logoutButton)
        })
    
        expect(screen.getByTestId('user')).toHaveTextContent('No user logged in')
      })
})
