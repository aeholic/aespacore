// KoreaTime Component

"use client"

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import duration from 'dayjs/plugin/duration'
import { useState, useEffect } from 'react'

dayjs.extend(utc)
dayjs.extend(duration)

const KoreaTime: React.FC = (): JSX.Element => {
  
  const
    targetTime: string = '2023-06-03 09:24:00',
    remaining: string = '0d 0h 0m 0s', 
    kst: string = '0000/00/00 00:00:00',
    [currentTime, setCurrentTime] = useState<string>(kst),
    [countdown, setCountdown] = useState<string>(remaining)

  useEffect(() => {

    const krTime = () => dayjs().utcOffset(540).format('YYYY/MM/DD hh:mm:ss')

    setInterval(() => setCurrentTime(krTime()), 1000)
    setInterval(() => {
      const 
        now: dayjs.Dayjs | string = krTime(), 
        target: dayjs.Dayjs = dayjs(targetTime),
        duration: duration.Duration = dayjs.duration(target.diff(now)),
        days: number = Math.floor(duration.asDays()),
        hours: number = duration.hours(),
        minutes: number = duration.minutes(),
        seconds: number = duration.seconds(),
        countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`
      setCountdown(days+hours+minutes+seconds <= 0 ? 
        'DING DONG' : countdownString
      )
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