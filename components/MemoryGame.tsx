// Memory Component

'use client'

import React from 'react'
import { useState, useEffect, useRef } from 'react'
import _ from 'underscore'

// const totalCards: number = 6;

// interface Card {
//   id: number;
//   isFlipped: boolean;
//   isSolved: boolean;
// }

const MemoryGame = (): JSX.Element => {

  let crd1 = 0
  let crd2 = 0
  
  const 
    [table, setTable] = useState<any>(),
    // [cards, setCards] = useState<Array<string>>([
    //   'red', 'blue', 'yellow', 'green', 'orange', 'pink', 'cyan', 'purple',
    //   'red', 'blue', 'yellow', 'green', 'orange', 'pink', 'cyan', 'purple'
    // ]),
    // [cards, setCards] = useState<Array<string>>([
    //   'card bg-red-500', 'card bg-blue-500', 'card bg-yellow-500', 'card bg-green-500', 'card bg-orange-500', 'card bg-pink-500', 'card bg-cyan-500', 'card bg-purple-500',
    //   'card bg-red-500', 'card bg-blue-500', 'card bg-yellow-500', 'card bg-green-500', 'card bg-orange-500', 'card bg-pink-500', 'card bg-cyan-500', 'card bg-purple-500',
    // ]),
    [cards, setCards] = useState<Array<any>>([
      {id: 1, match: 1, face: 'card bg-red-500'}, {id: 2, match: 2, face: 'card bg-blue-500'}, {id: 3, match: 3, face: 'card bg-yellow-500'}, {id: 4, match: 4, face: 'card bg-green-500'}, 
      {id: 5, match: 1, face: 'card bg-red-500'}, {id: 6, match: 2, face: 'card bg-blue-500'}, {id: 7, match: 3, face: 'card bg-yellow-500'}, {id: 8, match: 4, face: 'card bg-green-500'} 
      // {id: '5-1', face: 'card bg-orange-500'}, {id: '6-1', face: 'card bg-pink-500'}, {id: '7-1', face: 'card bg-cyan-500'}, {id: '8-1', face: 'card bg-purple-500'},
    ]),
    
    // [firstID, setFirstID] = useState<string | null>(null),
    // [firstID, setFirstID] = useState<string | null>(null),
    [card2, setCard2] = useState(),
    // card1 = useRef('')
    [card1, setCard1] = useState(),
    faceRef: any | null | undefined = useRef<HTMLDivElement>(null)
    
  // const checkSameCard = (face?: any) => {
  //   if (!firstID) {
  //     setFirstID(face.id)
  //     console.log('1st: '+face.id)
  //     console.log('1st: '+firstID)
  //   } else if (firstID) {
  //     if (firstID.match === face.match) {
  //       console.log('***** Match! *****')
  //     } else {
  //       console.log('Nope.')
  //     }
  //     setFirstID('')
  //     setSecondID('')
  //     console.log('reseted.')
  //   }
  // }

  const setCard = (card: any) => {
    if (crd1 === 0) {
      crd1 = card
      console.log(crd1)
    } else if (crd1 !== 0) {
      crd2 = card
      console.log(crd1)
      if (crd1 === crd2) {
        console.log('***** MATCH! *****')
      }
      crd1 = 0
      crd2 = 0
    }
  }

  const randomCards: VoidFunction = () => {
    let i: number = 0
    const random: Array<string> = _.shuffle(cards)
    setTable(
      // random.map((color: string): JSX.Element => <div key={i++} {...{className: `card bg-${color}-500`}}></div>)
      random.map((color: any): JSX.Element => <div key={i++} {...{className: `covered ${color.face}`}}
        ref={faceRef} data-face={color.match} onClick={()=>setCard(color.match)}>
      </div>)
    )
  }

    
  useEffect(()=> randomCards(), [])
  useEffect(()=> {
    crd1 = 1 
    // console.log('Data :'+faceRef.current?.getAttribute('data-face'))
    // if (card1 !== '') {
    //   setCard2(card1)
    // } else {
      // setCard1(faceRef.current?.getAttribute('data-face'))
      // console.log(faceRef.current?.getAttribute('data-face'))
    // }
    // else setCard1(card2)
    console.log('effect: '+crd2) 
    console.log('effect: '+crd1) 
    // if (card2 && card1) return
    // else if (card2 === card1) {
    //   console.log('MATCH!') 
    //   console.log(card2) 
    //   console.log(card1) 
    // }
    // checkSameCard()
    // if (firstID?.length === 0) {
    //   console.log('1st: '+face)
    //   console.log('1st: '+firstID)
    // } 
    // if (!firstID) {
    //   setFirstID(faceRef.current?.target.value())
    //   console.log('1st: '+face.id)
    //   console.log('1st: '+firstID)
    // } else if (firstID) {
    //   if (firstID.match === face.match) {
    //     console.log('***** Match! *****')
    //   } else {
    //     console.log('Nope.')
    //   }
    //   setFirstID('')
    //   setSecondID('')
    //   console.log('reseted.')
    // }
  }, [])

  return (
    <>
      <button className="border" onClick={randomCards}>Refresh</button><br />
      1st Card: {card1}<br />
      2nd Card: {card2}
      {card1 === card2 ? 'MATCH!' : ''}
      <div className="memory">
        {table}
      </div>
    </>
  )

  

  // const [cards, setCards] = useState<Card[]>([]);
  // const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  // const [solvedCards, setSolvedCards] = useState<number[]>([]);

  // useEffect(() => {
  //   initializeGame();
  // }, []);

  // const initializeGame = (): void => {
  //   const initialCards: Card[] = [];

  //   for (let i = 0; i < totalCards; i++) {
  //     const card: Card = {
  //       id: i,
  //       isFlipped: false,
  //       isSolved: false,
  //     };

  //     initialCards.push(card);
  //   }

  //   setCards(shuffleCards(initialCards));
  // };

  // const shuffleCards = (cardsArray: Card[]): Card[] => {
  //   return [...cardsArray].sort(() => Math.random() - 0.5);
  // };

  // const handleCardClick = (card: Card): void => {
  //   if (flippedCards.length === 1) {
  //     setFlippedCards([...flippedCards, card]);

  //     setTimeout(() => {
  //       checkForMatch(card);
  //     }, 1000);
  //   } else {
  //     setFlippedCards([card]);
  //   }
  // };

  // const checkForMatch = (card: Card): void => {
  //   const [firstCard] = flippedCards;

  //   if (firstCard.id === card.id) {
  //     setSolvedCards([...solvedCards, firstCard.id, card.id]);
  //     setFlippedCards([]);
  //   } else {
  //     resetFlippedCards();
  //   }
  // };

  // const resetFlippedCards = (): void => {
  //   setFlippedCards([]);

  //   setTimeout(() => {
  //     setFlippedCards([]);
  //   }, 1000);
  // };

  // const renderCards = (): JSX.Element[] => {
  //   return cards.map((card) => (
  //     <div
  //       key={card.id}
  //       className={`card bg-white border border-gray-300 rounded-md w-32 h-32 flex items-center justify-center cursor-pointer perspective-1000 transition-transform ${
  //         card.isFlipped ? 'transform rotate-y-180' : ''
  //       } ${card.isSolved ? 'bg-gray-200 cursor-default' : ''}`}
  //       onClick={() => handleCardClick(card)}
  //     >
  //       {card.isFlipped || card.isSolved ? (
  //         <div className="card-content text-lg font-bold">{card.id}test</div>
  //       ) : null}
  //     </div>
  //   ));
  // };

  // return (
  //   <div className="memory-game text-center font-sans">
  //     <h1 className="mb-8 text-3xl font-bold">Memory Game</h1>
  //     <div className="card-container flex flex-wrap justify-center">{renderCards()}</div>
  //   </div>
  // );
}


export default MemoryGame