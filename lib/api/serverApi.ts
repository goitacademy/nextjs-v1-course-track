import { cookies } from 'next/headers'
import { nextServer } from './api'
import { CheckSessionResponse } from './clientApi'

export const checkServerSession = async () => {
  const cookiesData = await cookies()
  const res = await nextServer.get<CheckSessionResponse>(`/auth/session`, {
    headers: { Cookie: cookiesData.toString() },
  })
  return res
}

export const getServerMe = async () => {
  const cookiesData = await cookies()
  const res = await nextServer.get<CheckSessionResponse>(`/auth/me`, {
    headers: { Cookie: cookiesData.toString() },
  })
  return res
}
