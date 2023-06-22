// MAIN LAYOUT

import Image from 'next/image'
import Link from 'next/link'
import logo from '§/public/aespa_logo.png'
import { Noto_Sans_KR, Oswald } from 'next/font/google'
import type { Metadata } from 'next'
import type { Children, EventProps } from '§/types/types'
import './globals.css'
import KoreaTime from '§/components/KoreaTime'
import Utils from '§/lib/utils'
import { prisma } from '§/lib/db'

const osw = Oswald({ 
	subsets: ['latin'], 
	style: 'normal',
	weight: ['200', '400', '500', '700']
})

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'],
})

export const metadata: Metadata = { 
  title: `${Utils.Project}`,
  description: 'Your #1 Source for aespa statistics',	
}

const NextEvent = async () => {
	const upcoming: EventProps = await prisma.$queryRaw`
		SELECT
			date, time, eventName, 
			DATETIME('now', 'utc', '+11 hours') AS krDateTime,
			date || ' ' || time AS eventDateTime
		FROM Event
		WHERE krDateTime <= eventDateTime 
		ORDER BY eventDateTime ASC`

	return upcoming
}

export default async function RootLayout({ children }: Children) {

	const upcomingEvent = await NextEvent()

  return (
    <html lang='en'>
			<head />
			<body>
				<header className={`${osw.className}`}>
					<div className="flex p-5">
						<Link href="/" className="flex title-font font-medium items-center text-white">
							<Image id="logo" src={logo} alt="aespa Fancams" title="aespa Fancams" />
							<span className="ml-3 mr-8 text-2xl">aespacore</span>
						</Link>
						<nav>
							<div id="topnavi">
								<div className="menu">
									<span><Link href="/" prefetch={true}>Home</Link></span>
									<span><Link href="/event-schedule" prefetch={true}>Event Schedule</Link></span>
									<span><Link href="/achievements" prefetch={true}>Achievements</Link></span>
									<span><Link href="/content-timeline" prefetch={true}>Content Timeline</Link></span>
									<span><Link href="/fancams" prefetch={true}>Fancams</Link></span>
									<span><Link href="/brand-reputation" prefetch={true}>Brand Reputation</Link></span>
								</div>
								<div className="menu-right">
                  <KoreaTime {...{nextEvent: upcomingEvent}}/>
								</div>
							</div>
						</nav>
					</div>
				</header>
				<br />
				<main className={`${noto.className}`}>
					{children}
				</main>
			</body>
		</html>
  )
}