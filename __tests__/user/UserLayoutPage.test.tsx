import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import UserLayout from '@/app/user/layout'

const ChildComponent = () => <div data-testid="child-component">Loaded Content</div>

describe('UserLayout', () => {
  // it('should render the fallback while loading', async () => {
  //   render(
  //     <UserLayout>
  //       <ChildComponent />
  //     </UserLayout>
  //   )

  //   expect(screen.getByTestId('skeleton-title')).toBeInTheDocument()
  // })

  it('should render the data after it is loaded', async () => {
    const { getByText } = render(
      <UserLayout>
        <ChildComponent />
      </UserLayout>
    )

    // Wait for the data to load
    await waitFor(() => {
      expect(getByText('Loaded Content')).toBeInTheDocument()
    })
  })
})
