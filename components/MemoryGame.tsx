// Memory Component

'use client'

import React from 'react'
import { useState, useEffect } from 'react'
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
		[deck, setDeck] = useState<any>(_.shuffle(cards))

	const handleCardClick = (match: number, id: number) => {
		if (firstCard.match !== 0) {
			if (firstCard.match !== match) {
				deck.map((v:any) => v.face = v.face.replace(' flipped brightness-100', ''))
				firstCard.match = 0
			} else if (firstCard.match === match) {
				solvedCards.push(firstCard.match)
				const newDeck = deck.filter((v:any) => {
					if (solvedCards.includes(v.match))  {
						return v.face = v.face+' disappear brightness-100'
					} else return v.face
				})
				setDeck(newDeck)
				deck.map((v:any) => v.face = v.face.replace(' flipped brightness-100', ''))
				firstCard.match = 0
			}
		} else {
			firstCard.match = match
			firstCard.id = id
		}
		const flipped = deck.filter((v:any) => {
			if (v.match === firstCard.match && firstCard.id === v.id) {
				return v.face = v.face+' flipped brightness-100' 
			} else return v.face = v.face
		})
		setDeck(flipped)
	}

	const randomCards: VoidFunction = () => {
		setTable(
			deck.map(
				(c: any): JSX.Element => (
					// <div key={c.id} className="card-wrap bg-[url('/aespa_logo.png')]">
					<div key={c.id} className="card-wrap">
						<div
							key={c.id} 
							className={`card ${c.face} brightness-0`} 
							onClick={() => handleCardClick(c.match, c.id)}>
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
