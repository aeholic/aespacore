// API Routes: Event Schedule

import { NextResponse, NextRequest } from 'next/server'
import { GET_EVENTS } from '§/lib/prisma_queries'

type ResponseProps = {
  status?: string
  message?: string 
    | null 
    | unknown
  code: string | undefined
  result?: XMLHttpRequestBodyInit 
    | unknown 
    | undefined
}

type EventApiResponse = {
  [key: string]: any
  success?: ResponseProps
  error?: ResponseProps
}

export const GET = async () => {
  try {
    const query = await GET_EVENTS()
    return NextResponse.json<EventApiResponse>({
      success: {
        message: 'All events have been retrieved.',
        code: 'S1',
        result: query
      }
    }, { status: 200 })
  } catch (error) {
    return NextResponse.json<EventApiResponse>({
      error: {
        message: 'Failed to fetch Events.',
        code: 'E1'
      }
    }, { status: 500 })
  }
} 

