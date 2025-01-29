import { getProducts } from '@/utils/api'
import { FetchMock } from 'jest-fetch-mock'

declare global {
  var FetchMock: FetchMock;
}

require('jest-fetch-mock').enableMocks()

describe('API Integration Tests', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  it('should fetch products successfully', async () => {
    const mockProducts = [
      { id: 1, title: 'Product 1', price: 100, images: ['image1.jpg'] }
    ]
    
    fetchMock.mockResponseOnce(JSON.stringify(mockProducts))
    
    const products = await getProducts()
    expect(Array.isArray(products)).toBe(true)
    expect(products[0]).toHaveProperty('id')
  })

  it('should handle API errors gracefully', async () => {
    fetchMock.mockRejectOnce(new Error('API Error'))
    await expect(getProducts()).rejects.toThrow('API Error')
  })
})