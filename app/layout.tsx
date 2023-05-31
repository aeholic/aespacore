// MAIN LAYOUT

import './globals.css'
import Image from 'next/image'
import logo from '§/public/aespa_logo.png'
import { Noto_Sans_KR } from 'next/font/google'
import { Oswald } from 'next/font/google'
import type { Metadata } from 'next'
import type { Children } from '§/types'
import KoreaTime from '§/components/KoreaTime'
import Project from '§/lib/utils'

const osw = Oswald({ subsets: ['latin'] })
const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '500', '700'],
})

export const metadata: Metadata = { 
  title: Project,
  description: 'Your #1 Source for aespa statistics'
}

export default function RootLayout({ children }: Children) {
  return (
    <html lang='en'>
			<head />
			<body>
				<header className={`${osw.className}`}>
					<div className="flex p-5">
						<a href="/" className="flex title-font font-medium items-center text-white">
							<Image id="logo" src={logo} alt="aespa Fancams" title="aespa Fancams" />
							<span className="ml-3 mr-8 text-2xl">aespacore</span>
						</a>
						<nav>
							<div id="topnavi">
								<div className="menu">
									<span><a href="/">Home</a></span>
									<span><a href="/event-schedule">Event Schedule</a></span>
									<span><a href="/achievements">Achievements</a></span>
									<span><a href="/content-timeline">Content Timeline</a></span>
									<span><a href="/fancams">Fancams</a></span>
									<span><a href="/brand-reputation">Brand Reputation</a></span>
								</div>
								<div className="menu-right">
                  <KoreaTime />
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