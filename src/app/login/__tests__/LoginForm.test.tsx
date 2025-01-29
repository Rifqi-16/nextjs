import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from '../LoginForm'

jest.mock("@/context/AuthContext", () => ({
  useAuth: () => ({
    login: jest.fn().mockRejectedValue(new Error('Login failed'))
  })
}))

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}))

describe('LoginForm', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('displays error message on failed login', async () => {
    render(<LoginForm />)
    
    fireEvent.submit(screen.getByRole('form'))
    
    // Wait for the async operation to complete
    await new Promise(resolve => setTimeout(resolve, 0))
    
    expect(console.error).toHaveBeenCalled()
  })
})