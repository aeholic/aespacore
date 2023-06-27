// API Routes: Event Schedule

import { NextResponse, NextRequest } from 'next/server'
import { GET_EVENTS, NEXT_EVENTS } from '§/lib/prisma_queries'

export type ResponseProps = {
  status?: string
  message?: string 
    | null 
    | unknown
  code: string 
    | undefined
  result?: XMLHttpRequestBodyInit 
    | unknown 
    | undefined
}

export type EventApiResponse = {
  [key: string]: any
  success?: ResponseProps
  error?: ResponseProps
}

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams.get('action')

  if (params === 'getall') { // Get all events
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
  
  else if (params === 'next') { // Get next events
    try {
      const query = await NEXT_EVENTS()
      return NextResponse.json<EventApiResponse>({
        success: {
          message: 'Fetched the next upcoming events.',
          code: 'S2',
          result: query
        }
      }, { status: 200 })
    } catch (error) {
      return NextResponse.json<EventApiResponse>({
        error: {
          message: 'Failed to fetch the next upcoming events.',
          code: 'E2'
        }
      }, { status: 500 })
    }
  } else {
    return NextResponse.json<EventApiResponse>({
      error: {
        message: 'Unknown API request.',
        code: 'E0'
      }
    }, { status: 500 })
  }
} 

