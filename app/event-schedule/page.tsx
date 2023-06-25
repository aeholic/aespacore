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
  // getEvents = async (status: string): Promise<any> => {
  getEvents = async (): Promise<any> => {
    const query = await fetch('http://localhost:3000/api/aev1/events', { cache: 'no-store' })
    if (query.ok) {
      const res = await query.json()
      return await res.success.result
    }
    // if (query.ok) return await query.json()
      // SELECT * FROM Event
      //   WHERE date ${status} DATETIME('now', 'utc', '+11 hours')
      // ORDER BY date ASC, time ASC;

      // SELECT * FROM Event 
      //   WHERE REPLACE(date, '/', '-') ${status} DATE('now', '+9 hour')
      //   ORDER BY date ASC, time ASC
    // return query
  }

export default async function EventSchedulePage() : Promise<JSX.Element> {

  const
    events = await getEvents(),
    // scheduled = await getEvents('>'),

    returnEvents = () => {
      // return event.sort((a: any, b: any) => a.date+a.time > b.date+b.time ? 1 : -1).map((event: any) => (
      return events.map((event: any) => (
        <Event key={event.id}
          dateTime={`${event.date} ${event.time}`}
          eventName={event.eventName}
          confirmed={event.confirmed}
          category={event.category}
          link={event.link}
          image={event.image}
          status={event.status}
          reminder={event.reminder}
          id={event.id}
        />
      ))
    }

  return (
    <section>
      <article>
        <h2>Event Schedule</h2>
        <div className="event-schedule">
          <div className="event-header uppercase">
            <span>Action</span>
            <span>Date</span>
            <span>Time</span>
            <span>Category</span>
            <span>Event</span>
            <span>Countdown</span>
            <span>Info</span>
          </div>
          {returnEvents()}
          {/* <br /><div className="text-xs decoration-3">Next Event ↓</div><br /> */}
          {/* {returnEvents(scheduled)} */}
        </div>
      </article>
    </section>
  )
}