import '@testing-library/react'

import axiosInstance from '../../lib/axios' // Update the path accordingly

describe('axiosInstance', () => {
  beforeAll(() => {
    process.env.NEXT_PUBLIC_API_URL = 'http://localhost:3000/api'
  })
  it('should have the correct baseURL', () => {
    const expectedBaseURL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api'
    expect(axiosInstance.defaults.baseURL).toBe(expectedBaseURL)
  })
})
