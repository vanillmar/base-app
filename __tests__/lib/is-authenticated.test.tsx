import { isAuthenticated } from '@/lib/auth' // Adjust path if needed
import { cookies } from 'next/headers'

// Mock next/headers
jest.mock('next/headers', () => ({
  cookies: jest.fn()
}))

describe('isAuthenticated', () => {
  it('returns true if auth_token exists', async () => {
    ;(cookies as jest.Mock).mockReturnValue({
      has: jest.fn().mockReturnValue(true)
    })

    const result = await isAuthenticated()
    expect(result).toBe(true)
  })

  it('returns false if auth_token does not exist', async () => {
    ;(cookies as jest.Mock).mockReturnValue({
      has: jest.fn().mockReturnValue(false)
    })

    const result = await isAuthenticated()
    expect(result).toBe(false)
  })
})
