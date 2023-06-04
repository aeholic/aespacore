// EVENT SCHEDULE Page

import type { Metadata } from 'next'
import Project from '§/lib/utils'
import Event from '§/components/Event'

export const metadata: Metadata = { 
  title: `${Project} - Event Schedule`,
  description: 'Event schedule.'
}

export default function EventSchedulePage() : JSX.Element {
  return (
    <section>
      <article>
        <h2>Event Schedule</h2>
        <div className="event-schedule">
          <Event 
            dateTime='2023/06/10 07:30:00'
            eventName='The Governors Ball Music Festival @ Flushing Meadows Corona Park, New York City, USA'
            confirmed={true}
            category='Festival'
          />
          <Event 
            dateTime='2023/06/10 20:50:00'
            eventName='Knowing Bros EP.387'
            confirmed={true}
            category='Variety'
          />
          <Event 
            dateTime='2023/06/14 20:00:00'
            eventName='Withmuu Fansign Event'
            confirmed={true}
            category='Fansign Event'
          />
          <Event 
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
          />
        </div>
      </article>
    </section>
  )
}