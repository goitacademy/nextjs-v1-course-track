import { NextRequest, NextResponse } from 'next/server'
import { ApiError } from '../../type'
import { api } from '../../api'
import { parse } from 'cookie'
import { cookies } from 'next/headers'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    const response = await api.post('/auth/login', payload)
    const resCookies = response.headers['set-cookie']
    const array = Array.isArray(resCookies) ? resCookies : [resCookies]

    const cookiesData = await cookies()

    for (const cookiesStr of array) {
      if (cookiesStr) {
        const parsed = parse(cookiesStr)
        const options: Partial<ResponseCookie> = {
          maxAge: Number(parsed['Max-Age']),
          path: parsed.Path,
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
        }
        if (parsed.accessToken) {
          cookiesData.set('accessToken', parsed.accessToken, options)
        }
        if (parsed.refreshToken) {
          cookiesData.set('refreshToken', parsed.refreshToken, options)
        }
      }
    }

    return NextResponse.json(response.data)
  } catch (error) {
    const resErr = error as ApiError
    return NextResponse.json(
      { error: resErr.response?.data?.error ?? resErr.message },
      { status: resErr.status }
    )
  }
}
