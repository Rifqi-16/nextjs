import { render, screen, fireEvent } from '@testing-library/react'
import { AuthProvider, useAuth } from '../AuthContext'
import '@testing-library/jest-dom'
import { ReactElement } from 'react'

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn()
} as Storage

beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage
  })
})

beforeEach(() => {
  jest.clearAllMocks()
})

const TestComponent = (): ReactElement => {
  const auth = useAuth()
  const { user, login, logout, register } = auth ?? {
    user: null,
    login: () => {},
    logout: () => {},
    register: () => {}
  }

  return (
    <div>
      {user ? <p>Welcome {user}</p> : <p>Not logged in</p>}
      <button onClick={() => login('test@example.com')}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={() => register('test@example.com')}>Register</button>
    </div>
  )
}

describe('AuthContext', () => {
  it('provides authentication state and methods', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )
    
    expect(screen.getByText('Not logged in')).toBeInTheDocument()
    
    fireEvent.click(screen.getByText('Login'))
    expect(screen.getByText('Welcome test@example.com')).toBeInTheDocument()
    
    fireEvent.click(screen.getByText('Logout'))
    expect(screen.getByText('Not logged in')).toBeInTheDocument()
  })

  it('handles registration', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    )
    
    fireEvent.click(screen.getByText('Register'))
    expect(screen.getByText('Welcome test@example.com')).toBeInTheDocument()
  })
})