// Memory Component

'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import _ from 'underscore'

const MemoryGame: React.FC = (): JSX.Element => {
  
  const 
    [table, setTable] = useState<any>(),
    [cards, setCards] = useState<Array<string>>([
      'red', 'blue', 'yellow', 'green', 'orange', 'pink', 'cyan', 'purple',
      'red', 'blue', 'yellow', 'green', 'orange', 'pink', 'cyan', 'purple'
    ]),
    
    randomCards: VoidFunction = () => {
      let 
        random = _.shuffle(cards),
        i = 0
      setTable(
        random.map((color: string): JSX.Element => { 
          return <div key={i++} {...{className: `card bg-${color}-500`}}></div>
        })
      )
    }
      
  useEffect(()=> randomCards(), [])

  return (
    <>
      <button onClick={randomCards}>Refresh</button>
      <div className="memory">
        {table}
      </div>
    </>
  )
}

export default MemoryGame