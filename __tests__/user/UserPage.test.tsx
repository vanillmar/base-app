import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UserPage from '@/app/user/page'

describe('Page', () => {
  beforeAll(() => {
    process.env.NEXT_PUBLIC_APP_NAME = 'TestApp'
  })

  it('renders a heading', () => {
    render(<UserPage />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('User Page')
  })
})
