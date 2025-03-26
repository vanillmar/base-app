import '@testing-library/react'
import axiosInstance from '../../lib/axios' // Update the path accordingly

jest.mock('../../lib/axios')

const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>

describe('axiosInstance', () => {
  beforeAll(() => {
    process.env.NEXT_PUBLIC_API_URL = 'http://localhost:3000/api'
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should have the correct baseURL', () => {
    const expectedBaseURL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api'
    expect(axiosInstance.defaults.baseURL).toBe(expectedBaseURL)
  })

  it('should call the correct base URL with /test-endpoint', async () => {
    // Arrange
    mockedAxios.get.mockResolvedValue({ data: { success: true } })

    // Act
    const response = await axiosInstance.get('/test-endpoint')

    // Assert
    expect(mockedAxios.get).toHaveBeenCalledWith('/test-endpoint')
    expect(response.data).toEqual({ success: true })
  })

  it('should include custom headers', async () => {
    // Arrange
    mockedAxios.get.mockResolvedValue({ data: {} })

    const customHeaders = {
      headers: { Authorization: 'Bearer token123' },
    }

    // Act
    await axiosInstance.get('/test-endpoint', customHeaders)

    // Assert
    expect(mockedAxios.get).toHaveBeenCalledWith(
     '/test-endpoint',
      customHeaders
    )
  })
})
