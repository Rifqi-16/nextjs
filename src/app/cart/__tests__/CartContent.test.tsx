import { render, screen, fireEvent } from '@testing-library/react'
import CartContent from '../CartContent'

const mockCart = [
  {
    id: 1,
    title: 'Test Product',
    price: 100,
    image: 'test-image.jpg',
    quantity: 2
  }
]

jest.mock("@/context/CartContext", () => ({
  useCart: () => ({
    cart: mockCart,
    removeFromCart: jest.fn(),
    clearCart: jest.fn()
  })
}))

describe('CartContent', () => {
  it('renders cart items', () => {
    render(<CartContent />)
    
    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('Price: $100 x 2')).toBeInTheDocument()
    expect(screen.getByText('Total: $200')).toBeInTheDocument()
  })

  it('handles empty cart', () => {
    jest.spyOn(require('@/context/CartContext'), 'useCart').mockReturnValue({
      cart: [],
      removeFromCart: jest.fn(),
      clearCart: jest.fn()
    })

    render(<CartContent />)
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()
  })

  it('handles remove item', () => {
    const removeFromCart = jest.fn()
    jest.spyOn(require('@/context/CartContext'), 'useCart').mockReturnValue({
      cart: mockCart,
      removeFromCart,
      clearCart: jest.fn()
    })

    render(<CartContent />)
    fireEvent.click(screen.getByText('Remove'))
    expect(removeFromCart).toHaveBeenCalledWith(1)
  })

  it('handles clear cart', () => {
    const clearCart = jest.fn()
    jest.spyOn(require('@/context/CartContext'), 'useCart').mockReturnValue({
      cart: mockCart,
      removeFromCart: jest.fn(),
      clearCart
    })

    render(<CartContent />)
    fireEvent.click(screen.getByText('Clear Cart'))
    expect(clearCart).toHaveBeenCalled()
  })
})