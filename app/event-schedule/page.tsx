// EVENT SCHEDULE Page

import type { Metadata } from 'next'
import Utils from '§/lib/utils'
import Event from '§/components/Event'
import { prisma } from '§/lib/db'
import type { EventProps } from '§/types/types'

export const metadata: Metadata = { 
  title: `${Utils.Project} - Event Schedule`,
  description: 'Event schedule.'
}

const 
  addEvent = async (data: EventProps): Promise<any> => {
    await prisma.event.create({
      data: {
        eventName: data.eventName,
        date: data.date,
        time: data.time,
        category: data.category,
        confirmed: data.confirmed
      }
    })
  },
  editEvent = async (data: EventProps): Promise<any> => {},
  // getEvents = async (): Promise<any> => await prisma.event.findMany(),
  /**
   * Get all events. 
   * @return Promise: query result
   * @param status: "<" commenced | ">" scheduled"
  */
  getEvents = async (status?: '>=' | '<'): Promise<any> => {
    const query = await prisma.$queryRawUnsafe(`
      SELECT * FROM Event 
        WHERE REPLACE(date, '/', '-') ${status} DATE('now', '+9 hour')
        ORDER BY date ASC, time ASC
    `)
    return query
  }

export default async function EventSchedulePage() : Promise<JSX.Element> {

  const scheduled = await getEvents('>=')
  const commenced = await getEvents('<')

  const returnEvents = (event:any) => {
    // return event.sort((a: any, b: any) => a.date+a.time > b.date+b.time ? 1 : -1).map((event: any) => (
    return event.map((event: any) => (
      <Event key={event.id}
        dateTime={`${event.date} ${event.time}`}
        eventName={event.eventName}
        confirmed={event.confirmed}
        category={event.category}
        link={event.link}
        image= {event.image}
        status= {event.status}
        reminder= {event.reminder}
      />
    ))
  }

  return (
    <section>
      <article>
        <h2>Event Schedule</h2>
        <div className="event-schedule">
          <div className="event-header uppercase">
            <span>Date</span>
            <span>Time</span>
            <span>Category</span>
            <span>Event</span>
            <span>Countdown</span>
            <span>Info</span>
          </div>
          {returnEvents(commenced)}
          {returnEvents(scheduled)}
        </div>
      </article>
    </section>
  )
}