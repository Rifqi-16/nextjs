import { render, screen, fireEvent } from '@testing-library/react'
import ProductDetail from '../ProductDetail'

const mockProduct = {
  id: 1,
  title: 'Test Product',
  description: 'Test Description',
  price: 100,
  images: ['test-image.jpg']
}

jest.mock("@/context/CartContext", () => ({
  useCart: () => ({
    addToCart: jest.fn()
  })
}))

// Mock window.alert
window.alert = jest.fn()

describe('ProductDetail', () => {
  it('renders product details', () => {
    render(<ProductDetail product={mockProduct} />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
    expect(screen.getByText(/\$100/)).toBeInTheDocument()
    // or
    expect(screen.getByText('Price: $100')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument()
  })

  it('handles add to cart', () => {
    const { getByRole } = render(<ProductDetail product={mockProduct} />)
    
    fireEvent.click(getByRole('button', { name: 'Add to Cart' }))
  })
})