import { render, screen, fireEvent } from '@testing-library/react'
import ProductList from '../ProductList'

const mockProducts = [
  {
    id: 1,
    title: 'Test Product',
    description: 'Test Description',
    price: 100,
    images: ['test-image.jpg'],
    category: { name: 'Test Category' }
  }
]

const mockCategories = [
  { id: 1, name: 'Test Category' }
]

jest.mock("@/context/CartContext", () => ({
  useCart: () => ({
    addToCart: jest.fn()
  })
}))

describe('ProductList', () => {
  it('renders products and filters', () => {
    render(
      <ProductList 
        initialProducts={mockProducts} 
        initialCategories={mockCategories} 
      />
    )
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('Test Category')).toBeInTheDocument()
  })

  it('filters products by category', () => {
    render(
      <ProductList 
        initialProducts={mockProducts} 
        initialCategories={mockCategories} 
      />
    )

    const select = screen.getByLabelText('Category')
    fireEvent.change(select, { target: { value: 'Test Category' } })
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })

  it('filters products by search', () => {
    render(
      <ProductList 
        initialProducts={mockProducts} 
        initialCategories={mockCategories} 
      />
    )

    const search = screen.getByPlaceholderText('Type a product...')
    fireEvent.change(search, { target: { value: 'Test' } })
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })
})