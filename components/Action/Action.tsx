'use client'

const Action = () => {
  const handleClick = () => {
    confirm('Are you sure?')
  }
  return <button onClick={handleClick}>Click me</button>
}

export default Action
