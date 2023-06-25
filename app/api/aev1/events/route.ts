import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse, NextRequest } from 'next/server'
import { GET_EVENTS_RAW } from '§/lib/prisma_queries'

type ResponseProps = {
  [key: string]: any
  success?: {
    status?: string
    message?: string 
      | null 
      | unknown
    code?: string
    result?: BodyInit
  }
  error?: {
    status?: number 
    message?: string 
      | null 
      | unknown
    code?: string
    result?: BodyInit
  }
}

// type NextApiProps = {
//   (
//     req?: NextApiRequest, 
//     res?: NextApiResponse<ResponseProps>
//   ): Promise<any>
// }

// export const GET: NextApiProps = async (req, res) => {
//   const query: BodyInit | unknown = await GET_EVENTS_RAW()

//   return NextResponse.json({
//     success: {
//       status: 200,
//       message: 'All events retrieved.',
//       code: 'S1',
//       result: query
//     }
//   })
// } 

interface NextResponseProps extends NextResponse {
  [key: string]: any
  success?: {
    status?: string
    message?: string 
      | null 
      | unknown
    code?: string
    result?: BodyInit
  }
  error?: {
    status?: number 
    message?: string 
      | null 
      | unknown
    code?: string
    result?: BodyInit
  }
}

export const GET = async (req: Request, res: NextResponse<NextResponseProps>) => {
  const query: BodyInit | unknown = await GET_EVENTS_RAW()

  return NextResponse.json({
    success: {
      message: 'All events have been retrieved.',
      code: 'S1',
      result: query
    }
  }, { status: 200 })
} 

