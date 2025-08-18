import { NextRequest, NextResponse } from 'next/server'
import { ApiError } from '../../type'
import { api } from '../../api'

type Props = {
  params: Promise<{ id: string }>
}

export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { id } = await params
    const { data } = await api.get(`/notes/${id}`)
    return NextResponse.json(data)
  } catch (error) {
    const resErr = error as ApiError
    return NextResponse.json(
      { error: resErr.response?.data?.error ?? resErr.message },
      { status: resErr.status }
    )
  }
}
