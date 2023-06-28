// FUN Page

import type { Metadata } from 'next'
import Project from '§/lib/utils'
import MemoryGame from '§/components/MemoryGame'

export const metadata: Metadata = { 
  title: `${Project} - Fun Stuff`,
  description: 'Small gimmicks and fun stuff.'
}

export default function FunPage() : JSX.Element {
  return (
    <section>
      <article>
        <h2>Fun Stuff</h2>
        <MemoryGame />
      </article>
    </section>
  )
}