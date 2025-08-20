import { NextResponse } from 'next/server'
import { api } from '../../api'
import { ApiError } from '../../type'
import { cookies } from 'next/headers'

export async function POST() {
  try {
    const cookiesData = await cookies()

    const res = await api.post('/auth/logout', {}, { headers: { Cookie: cookiesData.toString() } })

    cookiesData.delete('accessToken')
    cookiesData.delete('refreshToken')

    return NextResponse.json(res)
  } catch (error) {
    const resErr = error as ApiError
    return NextResponse.json(
      { error: resErr.response?.data?.error ?? resErr.message },
      { status: resErr.status }
    )
  }
}
