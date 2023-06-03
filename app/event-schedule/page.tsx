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
          <Event />
        </div>
      </article>
    </section>
  )
}