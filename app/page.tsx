// HOME Page

import Updates from '§/components/Updates'

export default async function Home(): Promise<JSX.Element> {
  return (
    <>
      <section className="welcome">
        <article>
          <h2>Your #1 Source</h2>
          <p>This is a fan website dedicated to the Kpop girlgroup aespa. Unlike most other websites this one has the focus on content timeline and statistics such as achievements, fancams, iChart, brand reputation, views, likes and so on.</p>
        </article>
      </section>
      <br />
      <Updates />
    </>
  )
}
