// EVENT SCHEDULE Page

import type { Metadata } from 'next'
import Utils from '§/lib/utils'
import Event from '§/components/Event'
import type { EventProps } from '§/types/types'

export const metadata: Metadata = { 
  title: `${Utils.Project} - Event Schedule`,
  description: 'Event schedule.'
}

const 
  getEvents = async (): Promise<any> => {
    const query = await fetch('http://localhost:3000/api/aev1/events', { cache: 'no-store' })
    if (query.ok) {
      const res = await query.json()
      if (res.success) return await res.success.result
    }
  },
  addEvent = async (data: EventProps): Promise<any> => {},
  editEvent = async (data: EventProps): Promise<any> => {},
  deleteEvent = async (data: EventProps): Promise<any> => {}

export default async function EventSchedulePage() : Promise<JSX.Element> {

  const
    events = await getEvents(),

    returnEvents = () => {
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
        </div>
      </article>
    </section>
  )
}