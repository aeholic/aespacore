// KoreaTime Component

"use client"

import { useState, useEffect, useRef } from 'react'
import EventTimer, { iEventTimer } from '§/lib/EventTimer'
import { useTimeString } from '§/hooks/useTimeString'
import type { EventProps } from '§/types/types'
import Utils from '§/lib/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'

const KoreaTime = (props: { nextEvent: EventProps[] }): JSX.Element => {

  const
    { nextEvent } = props,
    [upNext, setUpNext] = useState<number>(0),
    [currentTime, setCurrentTime] = useState<string | void>('0000-00-00 00:00:00'),
    [countdown, setCountdown] = useState<string | void>('000d 00h 00m 00s'),
    [countdownHandler, setCountdownHandler] = useState<NodeJS.Timer>(),
    [timerMsg, setTimerMsg] = useState<JSX.Element | null>(null),
    [alarmOn, setAlarmOn] = useState<boolean>(false),
    audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const time: iEventTimer = new EventTimer({
      targetTime: `${nextEvent[upNext].date} ${nextEvent[upNext].time}`,
      countdown: '0d 0h 0m 0s',
      UTCtimezone: 540,
      format: 'YYYY-MM-DD HH:mm:ss',
    })
    setInterval(() => setCurrentTime(time.krTime()), 1000)
    setCountdownHandler(setInterval(() => {
      time.duration()
      setCountdown(time.countdown)
    }, 1000))
  }, [upNext])
  
  useEffect(() => {
    if (countdown?.match(/^0d 0h 0m 0s/g))  {
      if (alarmOn) audioRef.current?.play()
      setCountdown('EVENT HAS STARTED1')
      setTimerMsg(<span className="text-yellow-500 p-0 animate-pulse">EVENT HAS STARTED!</span>)
      setTimeout(() => {
        setTimerMsg(null)
        setUpNext(upNext + 1)
      }, 5000)
      return () => clearInterval(countdownHandler)
    }
  }, [countdown, alarmOn])

  return (
    <span className="koreatime">
      <audio ref={audioRef} controls src='/illusion.mp3' hidden={true}></audio>
      <button className='hover:text-cyan-200' onClick={()=>setAlarmOn(!alarmOn)}>
        <FontAwesomeIcon icon={alarmOn ? faVolumeHigh : faVolumeXmark} />
      </button>
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