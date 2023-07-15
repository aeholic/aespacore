// EVENT SCHEDULE Page

import type { Metadata } from 'next'
import Utils from '§/lib/utils'
import Event from '§/components/Event'
import type { EventProps } from '§/types/types'
import type { EventApiResponse } from '../api/events/route'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

export const metadata: Metadata = { 
  title: `${Utils.Project} - Event Schedule`,
  description: 'Event schedule.'
}

dayjs.extend(utc)

type continualProps = {
  status: number
  originalDate: string
}

type continualFuncs = {
  nextDate?: string
  time?: string
  daily?: (props: continualProps) => string | undefined
  weekly?: (props: continualProps) => string | (string | undefined)[]
}

const continual: continualFuncs = {}

continual.nextDate = '2023-07-16'
continual.time = '09:30:00'

console.log('Current DateTime: '+dayjs().utcOffset(540).format('YYYY-MM-DD HH:mm:ss'))
console.log('MelOn DateTime: '+dayjs(`${continual.nextDate} ${continual.time}`).format('YYYY-MM-DD HH:mm:ss'))
const curDate = dayjs(`${continual.nextDate} ${continual.time}`).utcOffset(540)
const dateDiff = curDate.diff(dayjs().utcOffset(540), 'hours')
console.log('MelOn Difference: '+dateDiff)


continual.daily = (props: continualProps) => (
  props.status === 5 ? continual.nextDate : props.originalDate
)

// continual.weekly = (props: continualProps) => (
//   props.status === 5 ? [props.fixedDate, props.nextDate] : props.originalDate
// )

const 
  getEvents = async (): Promise<any> => {
    const query = await fetch('http://localhost:3000/api/events?action=getall', { cache: 'no-store' })
    if (query.ok) {
      const res: EventApiResponse = await query.json()
      if (res.success) return await res.success.result
    }
  },
  addEvent = async (data: EventProps): Promise<any> => {},
  editEvent = async (data: EventProps): Promise<any> => {},
  deleteEvent = async (data: EventProps): Promise<any> => {}



export default async function EventSchedulePage() : Promise<JSX.Element> {

  const events = await getEvents()

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
          {
            events.sort((a: any, b: any) => (
              (continual.daily && continual.daily({
                status: a.status, originalDate: a.date
              })) + a.time > 
              (continual.daily && continual.daily({ 
                status: b.status, originalDate: b.date
              })) + b.time ? 1 : -1
            )).map((event: any) => {
              event.date = (continual.daily && continual.daily({
                status: event.status, originalDate: event.date
              }))
              return <Event key={event.id}
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
            })
          }
        </div>
      </article>
    </section>
  )
}