// Event Component

"use client"

import { useState, useEffect} from 'react'
import EventTimer, { iEventTimer } from '§/lib/EventTimer'
import dayjs from 'dayjs'
import type { EventComponentProps } from '§/lib/types'
import Link from 'next/link'

const pastTime = (cntdown: string | undefined) => {
  let past: string = '' 
  // const countdown: any = '-21d -1h -6m -12s'
  const countdown: any = cntdown
  const if1day = countdown.replace('-1d ', '')
  const remMinus: any = if1day?.match(/(?!\-)\d+[dhms]/g)?.join(' ')
  const removedDay = remMinus?.match(/\d+(?=d)/) - 1
  const replacedDay = remMinus?.replace(/\d+(?=d)/, removedDay)
  past = replacedDay
  return past
  // console.log(past)
}

const Event = (props: EventComponentProps) : JSX.Element => {

  const 
    { dateTime, eventName, category, confirmed, link }: EventComponentProps = props,
    splitDate: Array<string> = dateTime.split(/\s/),

    time: iEventTimer = new EventTimer({
      targetTime: splitDate[1] === 'null' ? `${splitDate[0]} 00:00:00` : dateTime,
      countdown: '0d 0h 0m 0s',
      UTCtimezone: 540,
      format: 'YYYY/MM/DD HH:mm:ss',
      action: 'DING DONG!'
    }),

    [countdown, setCountdown] = useState<string | undefined>(''),
    curDate = dayjs().utcOffset(540).format('YYYY/MM/DD HH:mm:ss' )

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
      cat === 'Other' || null ? '!bg-sky-900' : null
    )}
  }

  return (
    <div {...{className: 'event '+(dateTime < curDate ? 'opacity-60 brightness-75' : '')}}>
      <span className="date">
        {dayjs(splitDate[1] === 'null' ? splitDate[0] : dateTime).format('YYYY ddd MMM D')}
        {confirmed && <span className="confirmed" title="Officially confirmed by aespa/SME">✓&nbsp;Confirmed</span>}
      </span>
      <span className="time">{splitDate[1] === 'null' ? 'TBA' : dayjs(dateTime).format('HH:mm')+' KST'}</span>
      <span {...getCategoryColor(category)}>{category}</span>
      <span className="eventname"><Link target="_blank" href={link || 'https://www.twitter.com/aespa_official'}>{eventName}</Link></span>
      <span className="remaining">{dateTime < curDate ? <>COMMENCED<br /> {pastTime(countdown)} ago</>: countdown}</span>
    </div>
  )
}

export default Event