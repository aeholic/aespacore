// KoreaTime Component

"use client"

import { useState, useEffect } from 'react'
import HTMLReactParser from 'html-react-parser'
import EventTimer, { TimeUnits } from '§/lib/EventTimer'
import type { EventProps } from '§/lib/types'
import Utils from '§/lib/utils'
import { hlText } from './Event'

const parse: any = HTMLReactParser

type TimeColorizerProps = {
  counter?: string
  unit?: string
}

export const timeColorizer = ( params: TimeColorizerProps): JSX.Element => {
  return <>{params.counter}<span className='text-cyan-500 !border-0 !h-0 !p-1'>{params.unit}</span></>
}

export const timestr = (str: string, mode: string = 'date' || 'time' || 'remaining') : JSX.Element | string => {
  if (mode === 'time') {
    const rgxt: { time?: any, hours?: any, minutes?: any, seconds?: any, divider?: any } = {}

    rgxt.time = str.match(/\d+\:\d+\:\d+/g)
    rgxt.divider = rgxt.time[0]?.match(/\:/g)
    rgxt.hours = rgxt.time[0]?.match(/^\d+/g)
    rgxt.minutes = rgxt.time[0]?.match(/\:(.*?)\:/g)[0].replace(/:/g, '')
    rgxt.seconds = rgxt.time[0]?.match(/\d+$/g)[0]

    return (
      <>
        {timeColorizer({counter: rgxt.hours, unit: ':'})}
        {timeColorizer({counter: rgxt.minutes, unit: ':'})}
        {timeColorizer({counter: rgxt.seconds})}
      </>
    )
  } else if (mode === 'date') {
    const rgxd: { date?: any, year?: any, month?: any, day?: any } = {}

    rgxd.date = str.match(/\d+\-\d+\-\d+/g)
    rgxd.year = rgxd.date[0]?.match(/\d{4}/g) 
    rgxd.month = rgxd.date[0]?.match(/\-\d{2}\-/g)[0].replace(/\-/g, '')
    rgxd.day = rgxd.date[0]?.match(/\d+$/g)[0]
    
    return (
      <>
        {timeColorizer({counter: rgxd.year, unit: '-'})}
        {timeColorizer({counter: rgxd.month, unit: '-'})}
        {timeColorizer({counter: rgxd.day})}
      </>
    )
  } else if (mode === 'remaining') {
    const rgxr: { d?: any, h?: any, m?: any, s?: any } = {}
    // Math.abs(rgxr.d)
    return <>{str}</>
  } else {
    return <>{str}</>
  }
}

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
      <>
        <span className="koreatime self-end">
          <div>
            {timeColorizer({ counter: duration.days, unit: 'd'})} 
            {timeColorizer({ counter: duration.hours, unit: 'h'})} 
            {timeColorizer({ counter: duration.minutes, unit: 'm'})} 
            {timeColorizer({ counter: duration.seconds, unit: 's'})} 
          </div>
          <span className="text-cyan-500 !p-0">Next Event:</span> <strong>{Utils.short(nextEvent[0].eventName)}</strong><br />
        {checkCountdown(countdown)} <br />{checkCountdown(countdown2)}</span>
        {/* <span className="koreatime self-end">Next Event: <strong>{Utils.short(nextEventName)}</strong> {checkCountdown()}</span> */}
        <span className="koreatime self-end"><span className="text-cyan-500 !pr-2">KST:</span>{timestr(currentTime, 'date')} &nbsp; {timestr(currentTime, 'time')}</span> 
      </>
    )
  }

export default KoreaTime