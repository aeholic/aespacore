// KoreaTime Component

"use client"

import { useState, useEffect } from 'react'
import HTMLReactParser from 'html-react-parser'
import EventTimer from '§/lib/EventTimer'
import { useTimeString } from '§/hooks/useTimeString'
import type { EventProps } from '§/lib/types'
import Utils from '§/lib/utils'
import { hlText } from './Event'

const parse: any = HTMLReactParser

const KoreaTime = (props: { nextEvent: EventProps[] }): JSX.Element => {
    
  const 
    { nextEvent } = props,
    
    time = new EventTimer({
      targetTime: `${nextEvent[0].date} ${nextEvent[0].time}`,
      countdown: '00d 00h 00m 00s',
      UTCtimezone: 540,
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    time2 = new EventTimer({
      targetTime: `${nextEvent[1].date} ${nextEvent[1].time}`,
      countdown: '00d 00h 00m 00s',
      UTCtimezone: 540,
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
      
    [currentTime, setCurrentTime] = useState<string>('0000-00-00 00:00:00'),
    [countdown, setCountdown] = useState<string>('00d 00h 00m 00s'),
    [countdown2, setCountdown2] = useState<string>('00d 00h 00m 00s'),
    [duration, setDuration] = useState<any[] | any>({
      hours: '0', days: '0',
      minutes: '0', seconds: '0'
    })
    
    useEffect(() => {
      setInterval(() => setCurrentTime(time.krTime()), 1000)

      const handler = setTimeout(() => {
        time.duration()
        setDuration({
          days: time.days, 
          hours: time.hours,
          minutes: time.minutes,
          seconds: time.seconds
        })
        setCountdown(time.countdown)
      }, 1000)
      // setInterval(() => {
      //   time2.duration()
      //   setCountdown2(time2.countdown)

        if (countdown.match(/-1d 0h 0m -3s/g))  {
          alert('f')
          clearInterval(handler)
          setCountdown(time2.countdown)
          // router.refresh()
        }
      // }, 1000)

    }, [countdown])

    const checkCountdown = (ctdn: any) => {
      const started = '<span className="text-yellow-500 p-0">EVENT HAS STARTED!</span>'
      if (ctdn.match(/^0d 0h 0m 0s|-1d 0h 0m -1s|-1d 0h 0m -2s|-1d 0h 0m -3s/g)) {
        return parse(started)
      }
      return hlText(parse(ctdn))
    }

    return (
      <span className="koreatime self-end">
        <span>Date</span>: {useTimeString(currentTime, 'date')}<br />
        <span>Time</span>: {useTimeString(currentTime, 'time')}<br />
        <span>Remaining</span>: {useTimeString(countdown, 'remaining')}
        <span className="text-cyan-500 !p-0">Next Event:</span> 
        <strong>{Utils.short(nextEvent[0].eventName)}</strong><br />
        {checkCountdown(countdown)} <br />{checkCountdown(countdown2)}
      </span>
    )
  }

export default KoreaTime