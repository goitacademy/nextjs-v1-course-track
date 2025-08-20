'use client'
import { register, RegisterRequestData } from '@/lib/api/clientApi'
import { useAuthStore } from '@/lib/store/authStore'
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter()
  const setAuth = useAuthStore((state) => state.setAuth)
  const handleRegister = async (formData: FormData) => {
    const data = Object.fromEntries(formData) as RegisterRequestData
    const res = await register(data)
    if (res) {
      setAuth(res)
      router.push('/profile')
    }
  }
  return (
    <form action={handleRegister}>
      <label>
        User Name
        <input type='text' name='userName' />
      </label>
      <br />
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
      <button type='submit'>Register</button>
    </form>
  )
}

export default Register
