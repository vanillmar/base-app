import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UserLoadingPage from '@/app/user/loading' // Adjust the path based on your project structure

describe('UserLoadingPage', () => {
  it('renders skeleton loaders', () => {
    render(<UserLoadingPage />)

    // Check if skeleton elements are present
    expect(screen.getByTestId('skeleton-title')).toBeInTheDocument()
    expect(screen.getByTestId('skeleton-section')).toBeInTheDocument()
    expect(screen.getByTestId('skeleton-large')).toBeInTheDocument()
  })
})
