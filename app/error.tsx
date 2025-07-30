'use client'

type Props = {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: Props) => {
  return (
    <div>
      Error: <h1>{error.message}</h1>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Error
