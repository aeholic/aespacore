// EVENT SCHEDULE Page

import type { Metadata } from 'next'
import Project from '§/lib/utils'
import Event from '§/components/Event'
import { prisma } from '§/lib/db'
import { Prisma, PrismaClient } from '@prisma/client'

export const metadata: Metadata = { 
  title: `${Project} - Event Schedule`,
  description: 'Event schedule.'
}

type EventProps = {
  eventName: string
  date: string
  time?: string
  category: string
  confirmed: boolean
}

const addEvent: Function = async (data: EventProps): Promise<any> => {
  await prisma.event.create({
    data: {
      eventName: data.eventName,
      date: data.date,
      time: data.time,
      category: data.category,
      confirmed: data.confirmed
    }
  })
}

const editEvent: Function = async (data: EventProps): Promise<any> => {}

const getEvents: Function = async (): Promise<any> => await prisma.event.findMany()

export default async function EventSchedulePage() : Promise<JSX.Element> {

  const events = await getEvents()

  return (
    <section>
      <article>
        <h2>Event Schedule</h2>
        <div className="event-schedule">
          { events.map((event: any) => (
            <Event key={event.id} dateTime={`${event.date} ${event.time}`} eventName={event.eventName} confirmed={event.confirmed} category={event.category} />
          ))}
          {/*<Event 
            dateTime='2023/06/16 19:30:00'
            eventName='32nd Lotte Duty Free Family Concert'
            confirmed={true}
            category='Concert'
          />
          <Event 
            dateTime='2023/06/18 21:00:00'
            eventName="'SEEN Festival' - Hoiana Resort & Golf in Hoi An, Vietnam"
            confirmed={true}
            category='Festival'
          /> */}
        </div>
      </article>
    </section>
  )
}