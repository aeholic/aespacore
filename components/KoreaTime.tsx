// KoreaTime Component

"use client"

import { useState, useEffect, useRef } from 'react'
import EventTimer from '§/lib/EventTimer'
import { useTimeString } from '§/hooks/useTimeString'
import type { EventProps } from '§/lib/types'
import Utils from '§/lib/utils'

const KoreaTime = (props: { nextEvent: EventProps[] }): JSX.Element => {

  const
    { nextEvent } = props,
    [upNext, setUpNext] = useState<number>(0),
    [currentTime, setCurrentTime] = useState<string>('0000-00-00 00:00:00'),
    [countdown, setCountdown] = useState<string>('000d 00h 00m 00s'),
    [countdownHandler, setCountdownHandler] = useState<NodeJS.Timer>(),
    [timerMsg, setTimerMsg] = useState<JSX.Element | null>(null),
    audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const time = new EventTimer({
      targetTime: `${nextEvent[upNext].date} ${nextEvent[upNext].time}`,
      countdown: '0d 0h 0m 0s',
      UTCtimezone: 540,
      format: 'YYYY-MM-DD HH:mm:ss',
    })
    setInterval(()=> setCurrentTime(time.krTime()), 1000)
    setCountdownHandler(setInterval(() => {
      time.duration()
      setCountdown(time.countdown)
    }, 1000))
  }, [upNext])
  
  useEffect(() => {
    if (countdown?.match(/^0d 0h 0m 0s/g))  {
      if (audioRef.current) {
        audioRef.current.play()
      }
      setCountdown('EVENT HAS STARTED1')
      setTimerMsg(<span className="text-yellow-500 p-0 animate-pulse">EVENT HAS STARTED!</span>)
      setTimeout(()=> {
        setTimerMsg(null)
        setUpNext(upNext+1)
      }, 5000)
      return () => clearInterval(countdownHandler)
    }
  }, [countdown])

  return (
    <span className="koreatime">
      <audio ref={audioRef} src='/illusion.mp3' hidden={true}></audio>
      <span className="text-cyan-500 w-32">NEXT EVENT</span> 
      <span title={nextEvent[upNext].eventName}>{Utils.short(nextEvent[upNext].eventName, 35)}</span><br />
      <span className="text-cyan-500 w-32">REMAINING</span>
      <span>{timerMsg ? timerMsg : useTimeString(countdown, 'remaining')}</span><br />
      <span className="text-cyan-500 w-32">KST</span>
      <span>{useTimeString(currentTime, 'date')}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{useTimeString(currentTime, 'time')}</span>
    </span>
  )
}

export default KoreaTime