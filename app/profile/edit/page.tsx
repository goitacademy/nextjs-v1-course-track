'use client'

import { useCounter } from '@/lib/store/counter'
import { useRouter } from 'next/navigation'

const ProfileEdit = () => {
  const router = useRouter()
  const handleClick = () => {
    const isConf = confirm('Are you sure?')
    if (isConf) router.push('/profile')
  }
  const { value, increment } = useCounter()

  const handleIncrement = () => {
    increment()
  }

  return (
    <div>
      <br />
      <button onClick={handleClick}> {`<`} Back</button>
      <br />
      ProfileEdit
      <br />
      <h1>{value}</h1>
      <button onClick={handleIncrement}>increment counter</button>
    </div>
  )
}

export default ProfileEdit
