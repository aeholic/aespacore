// Event Component

"use client"

import { useState, useEffect } from 'react'
import EventTimer from '§/lib/EventTimer'
import dayjs from 'dayjs'
import type { EventComponentProps } from '§/lib/types'

const Event = (props: EventComponentProps) : JSX.Element => {

  const 
    { dateTime, eventName, category, confirmed }: EventComponentProps = props,
    splitDate: Array<string> = dateTime.split(/\s/),

    time = new EventTimer({
      targetTime: splitDate[1] === 'null' ? `${splitDate[0]} 00:00:00` : dateTime,
      countdown: '0d 0h 0m 0s',
      UTCtimezone: 540,
      format: 'YYYY/MM/DD HH:mm:ss',
      action: 'DING DONG!'
    }),

    [countdown, setCountdown] = useState<string>('')

  useEffect(() => {
    setInterval(() => {
      time.duration()
      setCountdown(time.countdown)
    }, 1000)
  }, [])

  const getCategoryColor = (cat: string) => {
    return { className: 'category '+(
      cat === 'Festival/Performance' ? '!bg-pink-700' :
      cat === 'Concert/Tour' ? '!bg-blue-700' :
      cat === 'Variety' ? '!bg-orange-700' :
      cat === 'Chart Update' ? '!bg-green-500' :
      cat === 'Fansign' ? '!bg-purple-700' :
      cat === 'YouTube' ? '!bg-sky-700' :
      cat === 'Reality' ? '!bg-red-700' :
      cat === 'Interview/Radio' ? '!bg-lime-700' :
      cat === 'Comeback Teaser' ? '!bg-teal-700' :
      cat === 'Release' ? '!bg-violet-700' :
      cat === 'Other' || 'other' || null ? '!bg-sky-900' : null
    )}
  }

  return (
    <div className="event">
      <span className="date">
        {dayjs(splitDate[1] === 'null' ? splitDate[0] : dateTime).format('YYYY ddd MMM D')}
        {confirmed && <span className="confirmed" title="Officially confirmed by aespa/SME">✓&nbsp;Confirmed</span>}
      </span>
      <span className="time">{splitDate[1] === 'null' ? 'TBA' : dayjs(dateTime).format('HH:mm')+' KST'}</span>
      <span {...getCategoryColor(category)}>{category}</span>
      <span className="eventname">{eventName}</span>
      <span className="remaining">{countdown}</span>
    </div>
  )
}

export default Event