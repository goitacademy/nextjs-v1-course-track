import { NextRequest, NextResponse } from 'next/server'
import { ApiError } from '../../type'
import { api } from '../../api'

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    const { data } = await api.post('/auth/register', payload)
    return NextResponse.json(data)
  } catch (error) {
    const resErr = error as ApiError
    return NextResponse.json(
      { error: resErr.response?.data?.error ?? resErr.message },
      { status: resErr.status }
    )
  }
}
