'use client'

import { useRouter } from 'next/navigation'

const ProfileEdit = () => {
  const router = useRouter()
  const handleClick = () => {
    const isConf = confirm('Are you sure?')
    if (isConf) router.push('/profile')
  }
  return (
    <div>
      <br />
      <button onClick={handleClick}> {`<`} Back</button>
      <br />
      ProfileEdit
    </div>
  )
}

export default ProfileEdit
