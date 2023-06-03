// Updates Component

import Link from 'next/link'

const Updates = () : JSX.Element => {
  return (
    <section className="updates">
      <h2>Updates</h2>
      <article>
        <h3>Schedule added</h3>
        <p>It consists of confirmed schedules and unconfirmed, meaning approved from the company’s or aespa’s side.</p>
      </article>
      <article>
        <h3>Fancams</h3>
        <p>Almost every tweet I see have different numbers when it gets updated because not all are fancams. To prevent that, I made this statistic based on criteria, see <Link className="link" href="#">here</Link>.</p>
      </article>
      <article>
        <h3>Brand Reputation</h3>
        <p>Please take it with a grain of salt as this statistic is known to be very shady and biased. I added it just for convention, please don’t take these statistics seriously.</p>
      </article>
    </section>
  )
}

export default Updates