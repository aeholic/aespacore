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
      </article>
    </section>
  )
}