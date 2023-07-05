// Memory Component

'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import logo from '§/public/aespa_logo.png'
import _ from 'underscore'
import { useTimeString } from '§/hooks/useTimeString'

interface CardClickProps {
	(currentCard: CardProps) : void
}

type CardProps = {
	id: number
	match: number
	covered: boolean
	face: string
}

type CheckedCardsProps = {
	id: number
	match: number 
	solved: Array<number>
}

let checkedCards: CheckedCardsProps = {
	id: 0,
	match: 0,
	solved: []
}

let 
	timeBegan: any = null,
	timeStopped: any = null,
	stoppedDuration: any = 0, 
	started: any = null,

	notYetStopped: boolean = true

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
	// 'bg-[url(/memory/k2.png)]', 'bg-[url(/memory/w2.png)]', 'bg-[url(/memory/n2.gif)]', 'bg-[url(/memory/g2.gif)]'
])

const MemoryGame: React.FC = (): JSX.Element => {

	const StopWatch = class {
	
		private clockRunning() {
			const 
				currentTime:any = new Date(), 
				timeElapsed = new Date(currentTime - timeBegan - stoppedDuration), 
				hour = timeElapsed.getUTCHours(), 
				min = timeElapsed.getUTCMinutes(), 
				sec = timeElapsed.getUTCSeconds(), 
				ms = timeElapsed.getUTCMilliseconds()
	
			setWatch(
				(min > 9 ? min : '0' + min) + ':' + 
				(sec > 9 ? sec : '0' + sec) + '.' + 
				(ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms)
			)
		}
	
		public start() {
			if (timeBegan === null) {
					timeBegan = new Date()
			}
			if (timeStopped !== null) {
					// @ts-ignore
					stoppedDuration += (new Date() - timeStopped)
			}
	
			started = setInterval(this.clockRunning, 10)
		}
	
		public stop() {
			timeStopped = new Date()
			clearInterval(started)
		}
	
		public reset() {
			clearInterval(started)
			stoppedDuration = 0
			timeBegan = null
			timeStopped = null
			notYetStopped = true

			setWatch('00:00.000')
		}
	}

	const
		[table, setTable] = useState<Array<JSX.Element>>(),
		[deck, setDeck] = useState<Array<CardProps>>(_.shuffle(cards)),
		[watch, setWatch] = useState<any>('00:00.000'),
		stopWatch = new StopWatch(),
		memoryRef = useRef<HTMLDivElement>(null)
		
	const handleCardClick: CardClickProps = currentCard => {
		let settings = {
			delay: 500,
			flipped: ' flipped',
			hide: ' disappear',
			show: ' brightness-100',
			flipback: ' flipback',
			disable: ' pointer-events-none'
		}

		if (notYetStopped) {
			stopWatch.start()
			notYetStopped = false
		}

		if (checkedCards.match !== 0) {
			if (checkedCards.match !== currentCard.match) {
				setTimeout(()=> {
					const flipDeck = deck.filter((v: CardProps): Array<string | boolean> => {
						return [
							v.face = v.face.replace(settings.flipped, '').replace(settings.disable, ''),
							v.covered = true
						]
					})
			
					setDeck(flipDeck)
				}, settings.delay)

				checkedCards.match = 0
			} else {
				checkedCards.solved.push(checkedCards.match)

				setTimeout(()=> {
					const newDeck = deck.filter((v: CardProps): string => {
						if (checkedCards.solved.includes(v.match)) {
							return v.face = v.face+settings.hide+settings.show
						 } else {
							return v.face
						 }
					})

					if (checkedCards.solved.length === deck.length / 2) {
						stopWatch.stop()
						setWatch(watch)
						checkedCards.id = 0
						checkedCards.solved = []

						memoryRef.current!.innerHTML = `<div>COMPLETED!<br />Your time is <strong class="!text-[6rem]">${watch}</strong></div>`
					}

					setDeck(newDeck)
				}, settings.delay)

				checkedCards.match = 0
			}
		} else {
			checkedCards.match = currentCard.match
			checkedCards.id = currentCard.id
		}

		const flipped = deck.filter((v: CardProps): Array<string | boolean> | string => {
			if (currentCard.id === v.id) {
				return [
					v.face = v.face+settings.flipped+settings.disable,
					v.covered = false
				]
			} else {
				return v.face
			}
		})
		
		setDeck(flipped)
	}

	const randomCards: VoidFunction = (): void => {
		setTable(
			deck.map(
				(c: any): JSX.Element => (
					<div key={c.id} className="card-wrap">
						<div key={c.id} className={`card ${c.face}`} onClick={() => handleCardClick(c)}>
							<Image draggable={false} alt='aespa_logo.png' className={`default-deck ${c.covered ? 'opacity-100' : 'opacity-0'}`} src={logo} priority={true}/>
						</div>
					</div>
				)
			)
		)
	}

	useEffect(() => randomCards(), [deck])

	return (
		<>
			{/* <span>Time: {useTimeString(watch, 'stopwatch')}</span><br /> */}
			{/* <span className="font-bold text-lg">Time: {watch}</span><br /> */}
			<div className='memory' ref={memoryRef}>
				{table}
			</div>
		</>
	)
}

export default MemoryGame
