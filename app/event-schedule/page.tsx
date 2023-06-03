// EVENT SCHEDULE Page

import type { Metadata } from 'next'
import Project from '§/lib/utils'

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
          <div className="schedule">
            <span className="date">Sat, June 10</span>
            <span className="time">07:30</span>
            <span className="event">The Governors Ball Music Festival @ Flushing Meadows Corona Park, New York City, USA</span>
            <span className="remaining">0d 07h 30m 58s</span>
            <span className="confirmed">C</span>
            <span className="remaining">⌛</span>
          </div>
        </div>
      </article>
    </section>
  )
}