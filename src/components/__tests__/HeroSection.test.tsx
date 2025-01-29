import { render, screen } from '@testing-library/react'
import HeroSection from '../HeroSection'

describe('HeroSection', () => {
  it('renders hero content', () => {
    render(<HeroSection />)
    
    expect(screen.getByText('Welcome to Shopii')).toBeInTheDocument()
    expect(screen.getByText('Explore the best products and not so cheap prices.')).toBeInTheDocument()
  })

  test('renders start shopping link', () => {
    render(<HeroSection />)
    const link = screen.getByRole('link', { name: 'Start Shopping' })
    expect(link).toBeInTheDocument()
  })

  it('has correct link to products page', () => {
    render(<HeroSection />)
    
    const link = screen.getByRole('link', { name: 'Start Shopping' })
    expect(link).toHaveAttribute('href', '/products')
  })
})