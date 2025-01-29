import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../Navbar'

jest.mock("@/context/AuthContext", () => ({
  useAuth: () => ({
    user: null,
    logout: jest.fn()
  })
}))

describe('Navbar', () => {
  it('renders unauthenticated state', () => {
    render(<Navbar />)
    
    expect(screen.getByText('Shopii')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('renders authenticated state', () => {
    jest.spyOn(require('@/context/AuthContext'), 'useAuth').mockReturnValue({
      user: 'test@example.com',
      logout: jest.fn()
    })

    render(<Navbar />)
    
    expect(screen.getByText('Welcome, test@example.com')).toBeInTheDocument()
    expect(screen.getByText('Logout')).toBeInTheDocument()
  })

  it('handles logout', () => {
    const logout = jest.fn()
    jest.spyOn(require('@/context/AuthContext'), 'useAuth').mockReturnValue({
      user: 'test@example.com',
      logout
    })

    render(<Navbar />)
    fireEvent.click(screen.getByText('Logout'))
    
    expect(logout).toHaveBeenCalled()
  })
})