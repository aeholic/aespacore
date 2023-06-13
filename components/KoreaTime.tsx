// KoreaTime Component

"use client"

import { useState, useEffect } from 'react'
import EventTimer from '§/lib/EventTimer'
import type { EventProps } from '§/lib/types'
import Utils from '§/lib/utils'

const KoreaTime = (props: { nextEvent: EventProps[] }): JSX.Element => {

  const 
    { nextEvent } = props,

    time = new EventTimer({
      targetTime: `${nextEvent[0].date} ${nextEvent[0].time}`,
      countdown: '00d 00h 00m 00s',
      UTCtimezone: 540,
      format: 'YYYY/MM/DD HH:mm:ss',
      action: 'DING DONG!'
    }),

    initCountdown: string = '0d 0h 0m 0s', 
    initTime: string = '0000/00/00 00:00:00',
    [currentTime, setCurrentTime] = useState<string>(initTime),
    [countdown, setCountdown] = useState<string>(initCountdown)

  useEffect(() => {
    setInterval(() => setCurrentTime(time.krTime()), 1000)
    setInterval(() => {
      time.duration()
      setCountdown(time.countdown)
    }, 1000)
  }, [])

  return (
    <>
      <span className="koreatime self-end">Next Event: <strong>{Utils.short(nextEvent[0].eventName)}</strong> {countdown.match(/0d 0h 0m 0s/g) ? 'EVENT HAS STARTED!' : countdown}</span>
      <span className="koreatime self-end">KST: {currentTime}</span> 
    </>
  )
}

export default KoreaTime