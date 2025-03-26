import '@testing-library/react'
import '@testing-library/jest-dom'
import { render, waitFor, getByText } from '@testing-library/react'
import UserLayout from '@/app/user/layout'

const ChildComponent = () => <div data-testid="child-component">LoadedContent </div>

describe('UserLayout', () => {
  it('should render the fallback while loading', async () => {
    const { getByText } = render(
      <UserLayout>
        <ChildComponent />
      </UserLayout>
    )
    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('should render the data after it is loaded', async () => {
    const { getByText } = render(
      <UserLayout>
        <ChildComponent />
      </UserLayout>
    )

    // Wait for the data to load
    await waitFor(() => {
      expect(getByText('LoadedContent')).toBeInTheDocument()
    })
  })
})
