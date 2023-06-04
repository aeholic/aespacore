// Event Component

"use client"

import { useState, useEffect } from 'react'
import EventTimer from '§/lib/EventTimer'
import dayjs from 'dayjs'
import type { EventTimerInit, iEventTimer } from "§/lib/EventTimer"

type EventProps = {
  dateTime: string
  eventName: string
  category: string
  confirmed: boolean
}

const Event = (props: EventProps) : JSX.Element => {

  const { dateTime, eventName, category, confirmed }: EventProps = props

  const time = new EventTimer({
    targetTime: dateTime,
    countdown: '0d 0h 0m 0s',
    UTCtimezone: 540,
    format: 'YYYY/MM/DD HH:mm:ss',
    action: 'DING DONG!'
  })

  const [countdown, setCountdown] = useState<string>('')

  useEffect(() => {
    setInterval(() => {
      time.duration()
      setCountdown(time.countdown)
    }, 1000)
  }, [])

  const getCategoryColor = (category: string) => {
    return { className: 'category '+(
      category === 'Festival' ? '!bg-pink-700' :
      category === 'Concert' ? '!bg-blue-700' :
      category === 'Variety' ? '!bg-orange-700' :
      category === 'Chart Update' ? '!bg-green-500' :
      category === 'Fansign Event' ? '!bg-purple-700' :
      category === 'Tour' ? '!bg-sky-700' :
      '!bg-slate-800'
    )} 
  }

  return (
    <div className="event">
      <span className="date">{dayjs(dateTime).format('YYYY ddd MMM D')}</span>
      <span className="time">{dayjs(dateTime).format('HH:mm')+' KST'}</span>
      <span {...getCategoryColor(category)}>{category}</span>
      <span className="eventname">{eventName}</span>
      <span className="remaining">{countdown}</span>
      {confirmed && <span className="confirmed">✓</span>}
    </div>
  )
}

export default Event