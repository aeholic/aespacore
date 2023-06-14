// KoreaTime Component

"use client"

import { useState, useEffect } from 'react'
import HTMLReactParser from 'html-react-parser'
import EventTimer from '§/lib/EventTimer'
import type { EventProps } from '§/lib/types'
import Utils from '§/lib/utils'
import { hlText } from './Event'
import { useRouter } from 'next/navigation'


const 
  parse = HTMLReactParser,

  KoreaTime = (props: { nextEvent: EventProps[] }): JSX.Element => {
    
  const 
    router = useRouter(),
    { nextEvent } = props,
    
    time = new EventTimer({
      targetTime: `${nextEvent[0].date} ${nextEvent[0].time}`,
      countdown: '00d 00h 00m 00s',
      UTCtimezone: 540,
      format: 'YYYY-MM-DD HH:mm:ss',
      action: 'DING DONG!'
    }),
      
    [currentTime, setCurrentTime] = useState<string>('0000-00-00 00:00:00'),
    [countdown, setCountdown] = useState<string>('00d 00h 00m 00s')
    // [nextEventName, setNextEventName] = useState<string>(nextEvent[0].eventName),
    // [nextCountdown, setNextCountdown] = useState<string>(countdown)
    
    router.prefetch('/event-schedule') 
    
    useEffect(() => {
      setInterval(() => setCurrentTime(time.krTime()), 1000)
      setInterval(() => {
        time.duration()
        setCountdown(time.countdown)
      }, 1000)
      if (countdown.match(/-1d 0h 0m -3s/g))  {
        router.refresh()
      }
    }, [countdown])

    const checkCountdown = (ctdn: any) => {
      const started = '<span className="text-yellow-500">EVENT HAS STARTED!</span>'
      if (ctdn.match(/^0d 0h 0m 0s|-1d 0h 0m -1s|-1d 0h 0m -2s/g)) {
        return parse(started)
      } //else if (ctdn.match(/-1d 0h 0m -3s/g))  {
      //   router.refresh()
      //   return ctdn
      // }
      return hlText(parse(ctdn))
    }

    return (
      <>
        <span className="koreatime self-end">Next Event: <strong>{Utils.short(nextEvent[0].eventName)}</strong> <br />{checkCountdown(countdown)}</span>
        {/* <span className="koreatime self-end">Next Event: <strong>{Utils.short(nextEventName)}</strong> {checkCountdown()}</span> */}
        <span className="koreatime self-end">KST: {currentTime}</span> 
      </>
    )
  }

export default KoreaTime