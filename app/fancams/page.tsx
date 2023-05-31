// FANCAMS Page

import type { Metadata } from 'next'
import Project from '§/lib/utils'

export const metadata: Metadata = { 
  title: `${Project} - Top Fancams`,
  description: 'Most viewed fancams of each member.'
}

export default function FancamsPage() : JSX.Element {
  return (
    <section>
      <article>
        <h2>Fancams</h2>
      </article>
    </section>
  )
}