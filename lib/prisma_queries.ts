import type { EventProps } from "§/types/types"
import { prisma } from "./db"

// export const GET_EVENTS = async () => {
//   try {
//     const query = await prisma?.event?.findMany()
//     return query
//   } catch (error) {
//     return error
//   }
// }

export const GET_EVENTS = async () => {
  try {
    const query = await prisma.$queryRawUnsafe(`
      SELECT * FROM Event ORDER BY date ASC, time ASC;
    `)
    return query
  } catch (error) {
    return error
  }
}

export const ADD_EVENT = async (data: EventProps): Promise<any> => {
  try {
    await prisma.event.create({
      data: {
        eventName: data.eventName,
        date: data.date,
        time: data.time,
        category: data.category,
        confirmed: data.confirmed
      }
    })
  } catch (error) {
    return error
  }
}

export const EDIT_EVENT = async (req: any, res: any) => {
  try {
    const query = await prisma.$queryRawUnsafe(``)
    return query
  } catch (error) {
    return error
  }
}

export const DELETE_EVENT = async (req: any, res: any) => {
  try {
    const query = await prisma.$queryRawUnsafe(``)
    return query
  } catch (error) {
    return error
  }
}