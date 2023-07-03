// Memory Component

'use client'

import React, { Dispatch, EventHandler } from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '§/public/aespa_logo.png'
import _ from 'underscore'

let 
	firstCard: any = {
		id: 0,
		match: 0
	},
	solvedCards: number[] = []

const MemoryGame = (): JSX.Element => {
	
	const 
		cards: any[] = [
			{id: 1, match: 1, face: `bg-[url(/memory/ningning1.png)]`}, {id: 2, match: 2, face: `bg-[url(/memory/karina1.png)]`},
			{id: 5, match: 1, face: `bg-[url(/memory/ningning1.png)]`}, {id: 6, match: 2, face: `bg-[url(/memory/karina1.png)]`},
			
			{id: 3, match: 3, face: `bg-[url(/memory/winter1.png)]`}, {id: 4, match: 4, face: `bg-[url(/memory/giselle1.png)]`},
			{id: 7, match: 3, face: `bg-[url(/memory/winter1.png)]`}, {id: 8, match: 4, face: `bg-[url(/memory/giselle1.png)]`},
			
			// {id: 9, match: 5, face: 'bg-teal-500'}, {id: 10, match: 6, face: 'bg-pink-500'},
			// {id: 13, match: 5, face: 'bg-teal-500'}, {id: 14, match: 6, face: 'bg-pink-500'},
		
			// {id: 11, match: 7, face: 'bg-orange-500'}, {id: 12, match: 8, face: 'bg-purple-500'},
			// {id: 15, match: 7, face: 'bg-orange-500'}, {id: 16, match: 8, face: 'bg-purple-500'},
			
			// {id: 17, match: 9, face: 'bg-cyan-500'},
			// {id: 18, match: 9, face: 'bg-cyan-500'}
		],
		[table, setTable] = useState<any>(),
		[deck, setDeck] = useState<any>(_.shuffle(cards)),
		[cardIndex, setCardIndex] = useState<any>(null)

	const handleCardClick = (match: number, id: number) => {
		let settings = {
			delay: 500,
			flipped: ' flipped',
			hide: ' disappear',
			show: ' brightness-100',
			flipback: ' flipback',
			disable: ' pointer-events-none'
		}

		if (firstCard.match !== 0) {

			if (firstCard.match !== match) {
				setTimeout(()=> {
					const flipDeck = deck.filter((v:any) => v.face = 
						v.face
							.replace(settings.flipped, '')
							.replace(settings.disable, ''))

					setDeck(flipDeck)
				}, settings.delay)

				firstCard.match = 0
			} else {
				solvedCards.push(firstCard.match)

				setTimeout(()=> {
					const newDeck = deck.filter((v:any) => v.face = 
						solvedCards.includes(v.match) ? 
							v.face+settings.hide+settings.show : v.face)

					setDeck(newDeck)
				}, settings.delay)

				firstCard.match = 0
			}
		} else {
			firstCard.match = match
			firstCard.id = id
		}

		const flipped = deck.filter((v:any) => v.face = 
			id === v.id ? 
				v.face+settings.flipped+settings.disable : v.face)
		
		setDeck(flipped)
	}

	// handleCardClick.getCard = (c: any) => {
	// 	if (cardIndex === c.id) {
	// 		return true
	// 	} else {
	// 		cards.filter((v:any) => {
	// 			v.match === c.match 
	// 		})
	// 	}
	// }

	const randomCards: VoidFunction = () => {
		setTable(
			deck.map(
				(c: any): JSX.Element => (
					<div key={c.id} className="card-wrap">
						<div
							key={c.id} 
							className={`card ${c.face}`}
							onClick={() => handleCardClick(c.match, c.id)}
						>
							{/* <Image src={logo} alt="" /> */}
							{/* <img 
								onClick={()=>setCardIndex(c.id)} 
								className={`default-deck ${handleCardClick.getCard(c) ? 'opacity-0' : ''}`} 
								src="/aespa_logo.png"
							/> */}
						</div>
					</div>
				)
			)
		)
	}

	useEffect(() => {
		randomCards()
	}, [deck])

	return (
		<div className='memory'>
			{table}
		</div>
	)
}

export default MemoryGame
