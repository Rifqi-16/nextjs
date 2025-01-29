import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />)
    
    expect(screen.getByText('Shopii')).toBeInTheDocument()
    expect(screen.getByText('Online Store')).toBeInTheDocument()
    expect(screen.getByText('Help')).toBeInTheDocument()
    expect(screen.getByText('Telephone: 085-876-876-876')).toBeInTheDocument()
    expect(screen.getByText('Email: customer.care@shopii.com')).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<Footer />)
    
    expect(screen.getByText('Help Page')).toBeInTheDocument()
    expect(screen.getByText('About Shopii')).toBeInTheDocument()
  })

  it('renders copyright information', () => {
    render(<Footer />)
    
    expect(screen.getByText(/© 2025 Shopii. All Rights Reserved./)).toBeInTheDocument()
    expect(screen.getByText('@Rifqi')).toBeInTheDocument()
  })
})