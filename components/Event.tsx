// Event Component

"use client"

import { useState, useEffect } from 'react'
import HTMLReactParser from 'html-react-parser'
import EventTimer, { iEventTimer } from '§/lib/EventTimer'
import { useTimeString } from '§/hooks/useTimeString'
import type { EventComponentProps } from '§/types/types'
import dayjs from 'dayjs'
import Link from 'next/link'

const parse: any = HTMLReactParser

const pastTime = (cntdown: string | undefined) => {
  const countdown: any = cntdown
  const if1day = countdown.replace('-1d ', '')
  const remMinus: any = if1day?.match(/(?!\-)\d+[dhms]/g)?.join(' ')
  const removedDay = remMinus?.match(/\d+(?=d)/) - 1
  const replacedDay = remMinus?.replace(/\d+(?=d)/, removedDay)
  return replacedDay
}

export const hlText = (str: any) => {
  let rpl = (s: string) => `<span className='text-cyan-500 !border-0 !h-0'>${s}</span>`
  const replacedHTML = str
    .replaceAll(/(?!\d)d\b/g, rpl('d'))
    .replaceAll(/(?!\d)h\b(?=\s)/g, rpl('h'))
    .replaceAll(/(?!\d)m\b/g, rpl('m'))
    .replaceAll(/(?!\d)s\b/g, rpl('s'))
    .replaceAll(/(?!\d)ago\b/g, rpl('ago'))
  return parse(replacedHTML)
}

const Event = (props: EventComponentProps) : JSX.Element => {

  const 
    { dateTime, eventName, category, confirmed, link, image, status, reminder, edit }: EventComponentProps = props,
    splitDate: Array<string> = dateTime.split(/\s/),

    time: iEventTimer = new EventTimer({
      targetTime: splitDate[1] === 'null' ? `${splitDate[0]} 00:00:00` : dateTime,
      countdown: '0d 0h 0m 0s',
      UTCtimezone: 540,
      format: 'YYYY-MM-DD HH:mm:ss'
    }),

    [countdown, setCountdown] = useState<string | undefined>('000d 00h 00m 00s'),
    curDate = dayjs().utcOffset(540).format('YYYY-MM-DD HH:mm:ss' )

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
      cat === 'Birthday/Anniversary' ? '!bg-rose-500' :
      cat === 'Other' || null ? '!bg-sky-900' : null
    )}
  }

  return (
    <div {...{className: 'event '+(dateTime < curDate ? ' brightness-50 ' : '')}}>
      <span className="date">
        {dayjs(splitDate[1] === 'null' ? splitDate[0] : dateTime).format('YYYY ddd MMM D')}
      </span>
      <span className="time">{splitDate[1] === 'null' ? 'TBA' : dayjs(dateTime).format('HH:mm')+' KST'}</span>
      <span {...getCategoryColor(category)}>{category}</span>
      <span className="eventname"><Link target="_blank" href={link || 'https://www.twitter.com/aespa_official'}>{eventName}</Link></span>
      <span className="countdown">
        {dateTime < curDate ? 
          <>
            <span className="commenced">COMMENCED</span><br />
            <p className="text-gray-400 bg-red-500">
              {
                countdown?.match(/^0h 0m 0s/g) ? 
                // pastTime(countdown).toString()?.match(/^0h 0m 0s/g) ? 
                useTimeString('1d 0h 0m 0s ago', 'remaining') : 
                useTimeString(countdown, 'remaining')
              }
            </p>
          </>
        : useTimeString(countdown?.match(/^0d 0h 0m 0s/g) ? 'EVENT HAS STARTED!' : countdown, 'remaining')}
      </span>
      <span className="eventinfo">
        <span className="eventinfo-confirmed">
          {confirmed && <span title="Officially confirmed by aespa/SME">✓</span>}
        </span>
        <span className="eventinfo-status"></span>
        <span className="eventinfo-reminder"></span>
      </span>
      {/* <span className="staff-edit">{</span> */}
    </div>
  )
}

export default Event