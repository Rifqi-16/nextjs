import { render, screen, fireEvent } from '@testing-library/react'
import { CartProvider, useCart } from '../CartContext'

const TestComponent = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()
  return (
    <div>
      <p>Cart items: {cart.length}</p>
      <button onClick={() => addToCart({
        id: 1,
        title: 'Test Product',
        price: 100,
        image: 'test.jpg',
        quantity: 1
      })}>Add Item</button>
      <button onClick={() => removeFromCart(1)}>Remove Item</button>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

describe('CartContext', () => {
  it('provides cart state and methods', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    )
    
    expect(screen.getByText('Cart items: 0')).toBeInTheDocument()
    
    fireEvent.click(screen.getByText('Add Item'))
    expect(screen.getByText('Cart items: 1')).toBeInTheDocument()
    
    fireEvent.click(screen.getByText('Remove Item'))
    expect(screen.getByText('Cart items: 0')).toBeInTheDocument()
  })

  it('handles clear cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    )
    
    fireEvent.click(screen.getByText('Add Item'))
    fireEvent.click(screen.getByText('Clear Cart'))
    expect(screen.getByText('Cart items: 0')).toBeInTheDocument()
  })
})