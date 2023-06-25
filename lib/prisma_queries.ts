import { prisma } from "./db"

// export const GET_EVENTS = async (res: any) => {
//   const query = await prisma?.event.findMany()
//   res(query)
// }

export const GET_EVENTS_RAW = async () => {
  const query = await prisma.$queryRawUnsafe(`
    SELECT * FROM Event ORDER BY date ASC, time ASC;
  `)
  console.log(query) 
  return query
}