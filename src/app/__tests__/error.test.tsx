import { render, screen, fireEvent } from '@testing-library/react'
import type { ErrorProps } from 'next/error'
import Error from '../error'

interface ErrorComponentProps {
  error: Error
  reset: () => void
}

describe('Error', () => {
  const mockError = {
      name: 'Error',
      message: 'Test error',
      stack: '',
    } as Error
  const mockReset = jest.fn()

  it('renders error message', () => {
    render(<Error error={mockError} reset={mockReset} />)
    
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument()
  })

  it('calls reset when try again is clicked', () => {
    render(<Error error={mockError} reset={mockReset} />)
    
    fireEvent.click(screen.getByText('Try again'))
    expect(mockReset).toHaveBeenCalled()
  })
})