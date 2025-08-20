'use client'

import { logOut } from '@/lib/api/clientApi'
import { useAuthStore } from '@/lib/store/authStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const AuthNavigation = () => {
  const { isAuth, user, clearAuth } = useAuthStore()
  const router = useRouter()

  const handleLogout = async () => {
    await logOut()
    clearAuth()
    router.replace('/login')
  }

  return isAuth ? (
    <>
      <span>{user?.email}</span>
      <button onClick={handleLogout}>LogOut</button>
    </>
  ) : (
    <>
      <li>
        <Link href='/login'>Login</Link>
      </li>
      <li>
        <Link href='/register'>Register</Link>
      </li>
    </>
  )
}

export default AuthNavigation
