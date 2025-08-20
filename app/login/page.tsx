'use client'
import { login, LoginRequestData } from '@/lib/api/clientApi'
import { useAuthStore } from '@/lib/store/authStore'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const setAuth = useAuthStore((state) => state.setAuth)

  const handleLogin = async (formData: FormData) => {
    const data = Object.fromEntries(formData) as LoginRequestData
    const user = await login(data)
    if (user) {
      setAuth(user)
      router.push('/profile')
    }
  }
  return (
    <form action={handleLogin}>
      <label>
        Email
        <input type='email' name='email' />
      </label>
      <br />
      <label>
        Password
        <input type='password' name='password' />
      </label>
      <br />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
