// BRAND REPUTATION Page

import type { Metadata } from 'next'
import Utils from '§/lib/utils'

export const metadata: Metadata = { 
  title: `${Utils.Project} - Brand Reputation`,
  description: 'Monthly brand reputation ranking.'
}

export default function BrandReputationPage() : JSX.Element {
  return (
    <section>
      <article>
        <h2>Brand Reputation</h2>
      </article>
    </section>
  )
}