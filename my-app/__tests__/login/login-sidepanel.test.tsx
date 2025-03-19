import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LoginSidePanel from '@/components/custom-ui/login-sidepanel'

describe('Page', () => {
  beforeAll(() => {
    process.env.NEXT_PUBLIC_APP_NAME = 'TestApp'
  })

  it('renders a heading', () => {
    render(<LoginSidePanel />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Welcome to TestApp')
  })
})