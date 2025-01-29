'use client'

interface ErrorComponentProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorComponentProps) {
  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}