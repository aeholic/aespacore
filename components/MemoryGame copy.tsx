// Memory Component

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '§/public/aespa_logo.png'
import _ from 'underscore'
import { useTimeString } from '§/hooks/useTimeString'

interface CardClickProps {
	(currentCard: CardProps) : void
}

interface IStopWatch {
	start: () => void
	stop: () => void
	reset: () => void
}

type CardProps = {
	id: number
	match: number
	covered: boolean
	face: string
}

let checkedCards: {
	id: number
	match: number 
	solved: Array<number>
	flipped: number
} = {
	id: 0,
	match: 0,
	solved: [],
	flipped: 0
}

const time: {
	timeBegan: any
	timeStopped: Date | null
	stoppedDuration: number
	started: any
	notYetStopped: boolean
} = {
	timeBegan: null,
	timeStopped: null,
	stoppedDuration: 0, 
	started: null,
	notYetStopped: true
}

const 
	cards: Array<CardProps> = [],
	
	addCards = (newFace: Array<string>): void => {
		const newCards = (i: number, a: number): CardProps => {
			return { id: i++, match: a + 1, covered: true, face: newFace[a]}
		}
		for (let i = 1; i <= newFace.length; i++) {
			for (let a = 0; a < newFace.length; a++) {
				cards.push(
					newCards(i++, a), newCards(i++, a)
				)
			}
		}
	}

addCards([
	'bg-[url(/memory/k1.png)]', 'bg-[url(/memory/w1.png)]', 'bg-[url(/memory/n1.png)]', 'bg-[url(/memory/g1.png)]'
	/*'bg-[url(/memory/k2.png)]', 'bg-[url(/memory/w2.png)]', 'bg-[url(/memory/n2.gif)]', 'bg-[url(/memory/g2.gif)]',
	'bg-[url(/memory/k3.png)]', 'bg-[url(/memory/w3.png)]', 'bg-[url(/memory/n3.png)]', 'bg-[url(/memory/g3.png)]',
	'bg-[url(/memory/k4.png)]',	'bg-[url(/memory/w4.png)]', 'bg-[url(/memory/n4.png)]', 'bg-[url(/memory/g4.png)]',
																													'bg-[url(/memory/n5.png)]',	'bg-[url(/memory/g5.png)]'*/
])

const MemoryGame: React.FC = (): JSX.Element => {

	const StopWatch = class implements IStopWatch {	
		private clockRunning(): void {
			const 
				currentTime:any = new Date(), 
				timeElapsed = new Date(currentTime - time.timeBegan! - time.stoppedDuration), 
				min = timeElapsed.getUTCMinutes(), 
				sec = timeElapsed.getUTCSeconds(), 
				ms = timeElapsed.getUTCMilliseconds()
	
			setWatch(
				(min > 9 ? min : '0' + min) + ':' + 
				(sec > 9 ? sec : '0' + sec) + '.' + 
				(ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms)
			)
		}
	
		public start(): void {
			if (time.timeBegan === null) {
					time.timeBegan = new Date()
			}
			if (time.timeStopped !== null) {
					// @ts-ignore
					time.stoppedDuration += (new Date() - time.timeStopped)
			}
	
			time.started = setInterval(this.clockRunning, 10)
		}
	
		public stop(): void {
			time.timeStopped = new Date()
			clearInterval(time.started)
		}
	
		public reset(): void {
			clearInterval(time.started)
			time.stoppedDuration = 0
			time.timeBegan = null
			time.timeStopped = null
			time.notYetStopped = true

			setWatch('00:00.000')
		}
	}

	const
		[table, setTable] = useState<Array<JSX.Element>>(),
		[deck, setDeck] = useState<Array<CardProps>>(_.shuffle(cards)),
		[result, setResult] = useState<JSX.Element | null>(null),
		[watch, setWatch] = useState<string>('00:00.000'),
		stopWatch = new StopWatch()
		
	const handleCardClick: CardClickProps = currentCard => {
		let settings = {
			delay: 2000,
			hide: ' disappear',
			show: ' brightness-100',
			bgflip: ' bgflip'
		}

		if (time.notYetStopped) {
			stopWatch.start()
			time.notYetStopped = false
		}

		if (checkedCards.match !== 0) {
		
			// No Match
			if (checkedCards.match !== currentCard.match) {
				setTimeout(()=> {
					setDeck(deck.filter((v: CardProps): Array<string | boolean> | undefined => {
						if (currentCard.match === v.id) {
							return [
								v.face = v.face+' bgflip-back'.replace(settings.bgflip, ''),
								v.covered = true
							]
						} else {
							return [
								v.face = v.face,
								v.covered = true
							]
						}
					}))
				}, settings.delay)

				checkedCards.match = 0
			} else {

				// Match Successful
				checkedCards.solved.push(checkedCards.match)

				setTimeout(()=> {
					setDeck(deck.filter((v: CardProps): string => {
						if (checkedCards.solved.includes(v.match)) {
							return v.face = v.face+settings.hide
						 } else {
							return v.face
						 }
					}))
					
					if (checkedCards.solved.length === cards.length / 2) {
						setWatch(watch)
						checkedCards.id = 0
						checkedCards.solved = []
					}
				}, settings.delay)

				checkedCards.match = 0
			}
		} else {
			checkedCards.match = currentCard.match
			checkedCards.id = currentCard.id
		}

		// When Flipped
		setDeck(deck.filter((v: CardProps): Array<string | boolean> | string => {
			if (currentCard.id === v.id) {
				return [
					v.face = v.face+settings.bgflip,
					v.covered = false
				]
			} else {
				return v.face
			}
		}))
	}

	const randomCards: VoidFunction = (): void => {
		setTable(
			deck.map(
				(c: any): JSX.Element => (
					<div key={c.id} className="card-wrap">
						<div key={c.id} className={`card ${c.face}`} onClick={() => handleCardClick(c)}>
							<Image draggable={false} alt='aespa_logo.png' className={`default-deck ${c.covered ? '' : 'deckflip'}`} src={logo} priority={true}/>
						</div>
					</div>
				)
			)
		)
	}

	useEffect(() => {
		randomCards()
		if (checkedCards.solved.length === cards.length / 2) {
			stopWatch.stop()
			setResult(
				<div className="!text-2xl">
					<strong className="!py-10">COMPLETED!</strong><br />
					Your time is<br /><br />
					<strong className="!text-[4rem]">{useTimeString(watch, 'stopwatch')}</strong>
				</div>
			)
		}
	}, [deck])

	return (
		<>
			<div className="flex flex-row">
				<div className='memory'>
					{table}
				</div>
				<div>
					{ !result ? <span className="font-bold text-lg w-10">Time: {useTimeString(watch, 'stopwatch')}<br /></span> : result }
				</div>
			</div>
		</>
	)
}

export default MemoryGame
