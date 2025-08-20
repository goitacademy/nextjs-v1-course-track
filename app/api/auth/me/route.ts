import { NextResponse } from 'next/server'
import { api } from '../../api'
import { cookies } from 'next/headers'
import { ApiError } from '../../type'

export async function GET() {
  try {
    const cookiesData = await cookies()

    const { data } = await api.get('/auth/me', { headers: { Cookie: cookiesData.toString() } })
    return NextResponse.json(data)
  } catch (error) {
    const resErr = error as ApiError
    return NextResponse.json(
      { error: resErr.response?.data?.error ?? resErr.message },
      { status: resErr.status }
    )
  }
}
