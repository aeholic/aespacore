// CONTENT TIMELINE Page

import type { Metadata } from 'next'
import Utils from '§/lib/utils'

export const metadata: Metadata = { 
  title: `${Utils.Project} - Content Timeline`,
  description: 'Content timeline.'
}

export default function ContentTimelinePage() : JSX.Element {
  return (
    <section>
      <article>
        <h2>Content Timeline</h2>
      </article>
    </section>
  )
}