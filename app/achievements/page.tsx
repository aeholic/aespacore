// ACHIEVEMENTS Page

import type { Metadata } from 'next'
import Project from '§/lib/utils'

export const metadata: Metadata = { 
  title: `${Project} - Achievements`,
  description: 'Discographic achievements.'
}

export default function AchievementsPage() : JSX.Element {
  return (
    <section>
      <article>
        <h2>Achievements</h2>
      </article>
    </section>
  )
}