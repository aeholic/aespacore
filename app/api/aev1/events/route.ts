import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse, NextRequest } from 'next/server'
import { GET_EVENTS_RAW } from '§/lib/prisma_queries'

type ResponseProps = {
  [key: string]: any
  success?: {
    message?: string 
      | null 
      | unknown
    code?: string
    result?: BodyInit
  }
  error?: {
    message?: string 
      | null 
      | unknown
    code?: string
  }
}

type NextApiProps = {
  (
    request?: NextApiRequest, 
    response?: NextApiResponse<ResponseProps>
  ): Promise<any>
}

export const GET: NextApiProps = async (response) => {
  const query: BodyInit | unknown = await GET_EVENTS_RAW()

  if (response) {
    return NextResponse.json({
      success: {
        code: 200,
        result: query
      }
    })
  }
} 

