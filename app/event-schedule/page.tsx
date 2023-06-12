// EVENT SCHEDULE Page

import type { Metadata } from 'next'
import Project from '§/lib/utils'
import Event from '§/components/Event'
import { prisma } from '§/lib/db'
import { Prisma } from '@prisma/client'
import { EventProps } from '§/lib/types'

export const metadata: Metadata = { 
  title: `${Project} - Event Schedule`,
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
  getEvents = async (): Promise<any> => await prisma.event.findMany()

export default async function EventSchedulePage() : Promise<JSX.Element> {

  const events = await getEvents()

  const returnEvents = () => {
    return events.sort((a: any, b: any) => a.date+a.time > b.date+b.time ? 1 : -1).map((event: any) => (
      <Event key={event.id} 
        dateTime={`${event.date} ${event.time}`}
        eventName={event.eventName} 
        confirmed={event.confirmed} 
        category={event.category}
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
          </div>
          {returnEvents()}
        </div>
      </article>
    </section>
  )
}