'use client'

import { useCart } from "@/context/CartContext"

export default function CartContent() {
  const { cart, removeFromCart, clearCart } = useCart()

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleBuy = () => {
    alert("Purchase successful! Thank you for your order.")
    clearCart()
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-grid">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2 className="cart-item-title">{item.title}</h2>
                  <p className="cart-item-price">Price: ${item.price} x {item.quantity}</p>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
            <button className="cart-clear" onClick={clearCart}>Clear Cart</button>
            <button className="cart-buy" onClick={handleBuy}>Buy</button>
          </div>
        </>
      )}
    </div>
  )
}