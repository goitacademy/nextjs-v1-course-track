'use client'
import { login, LoginRequestData } from '@/lib/api'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  const handleLogin = async (formData: FormData) => {
    const data = Object.fromEntries(formData) as LoginRequestData
    const res = await login(data)
    if (res) {
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
