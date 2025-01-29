import { render, screen, fireEvent } from '@testing-library/react'
import RegisterForm from '../RegisterForm'

jest.mock("@/context/AuthContext", () => ({
  useAuth: () => ({
    register: jest.fn().mockResolvedValue(undefined)
  })
}))

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}))

describe('RegisterForm', () => {
  it('renders registration form', () => {
    render(<RegisterForm />)
    
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument()
  })

  it('handles form submission', async () => {
    render(<RegisterForm />)
    
    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: 'Test User' }
    })
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' }
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' }
    })
    
    fireEvent.submit(screen.getByRole('form'))
  })
})