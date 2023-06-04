// KoreaTime Component

"use client"

import { useState, useEffect } from 'react'
import EventTimer from '§/lib/EventTimer'

const time = new EventTimer({
  targetTime: '2023/06/04 22:00:00',
  countdown: '0d 0h 0m 0s',
  UTCtimezone: 540,
  format: 'YYYY/MM/DD HH:mm:ss',
  action: 'DING DONG!'
})

const KoreaTime: React.FC = (): JSX.Element => {

  const
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
      <span className="koreatime self-end">Next Event: <strong>Spicy Release</strong> {countdown}</span>{'•'}
      <span className="koreatime self-end">KST: {currentTime}</span> 
    </>
  )
}

export default KoreaTime