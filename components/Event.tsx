// Event Component

"use client"

import { useState, useEffect, ReactNode } from 'react'
import HTMLReactParser from 'html-react-parser'
import EventTimer, { iEventTimer } from '§/lib/EventTimer'
import { useTimeString } from '§/hooks/useTimeString'
import type { EventComponentProps } from '§/types/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSquareXmark, faClock } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs'
import Link from 'next/link'

const parse: any = HTMLReactParser

const pastTime = (cntdown: string | undefined | Element | JSX.Element) => {
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

// let testDates: Array<any> = [
//   { eventDate: '2023 Tue Jul 11', category: 'Other', event: 'Fan Video Call' },
//   { eventDate: '2023 Mon Jul 13', category: 'Other', event: 'Withmuu Fansign Event' },
//   { eventDate: '2023 Mon Aug 5', category: 'Festival/Performance', event: 'Knowing Bros EP. 237' },
//   { eventDate: '2023 Mon Aug 6', category: 'Festival/Performance', event: '32nd Lotte Duty Free Family Concert' },
//   { eventDate: '2023 Fri Sep 30', category: 'Festival/Performance', event: 'Waterbomb Festival 2023 in Seoul' }
// ]

const groupByMonth = (event: Array<any>) => {
  const months: any = {
    Jan: [], Feb: [], Mar: [],
    Apr: [], May: [], Jun: [],
    Jul: [], Aug: [], Sep: [],
    Oct: [], Nov: [], Dec: []
  }
  
  event.map((data: any, key: number) => {
    months[event[key].eventDate.match(/(?<=\d+\s\w..\s)\w+/g)![0]].push(data)
  })

  return months
}

// groupByMonth(testDates)

const Event = (props: EventComponentProps) : JSX.Element => {

  const 
    { dateTime, eventName, category, confirmed, link, image, status, reminder, id }: EventComponentProps = props,
    splitDate: Array<string> = dateTime.split(/\s/),
    twitterLink: string = 'https://www.twitter.com/aespa_official',
    time: iEventTimer = new EventTimer({
      targetTime: splitDate[1] === 'null' ? `${splitDate[0]} 00:00:00` : dateTime,
      countdown: '0d 0h 0m 0s',
      UTCtimezone: 540,
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    [monthDivider, setMonthDivider] = useState<any>(''),
    [countdown, setCountdown] = useState<string | undefined>('000d 00h 00m 00s'),
    curDate = dayjs().utcOffset(540).format('YYYY-MM-DD HH:mm:ss')

  const 
    staffAction: Function = (mode: 'edit' | 'delete'): void => {
      console.log(`The event with the ID ${id} has been ${mode === 'edit' ? 'edited' : 'deleted'}.`)
    }
    // userAction: Function = (reminder: boolean = false): void => {
    //   console.log(`You will be${!reminder ? 'not' : ''} notified 5 minutes before the event starts.`)
    // }

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
      cat === 'Solo Activities' ? '!bg-yellow-600' :
      cat === 'Other' || null ? '!bg-sky-900' : ''
    )}
  }

  const getStatusClass = (stat: ReactNode | number | undefined): JSX.Element =>  {
    return <span 
      { ... { className: 'uppercase text-xs '+(
        stat === 0 ? 'text-yellow-800' :
        stat === 1 ? 'text-teal-600' :
        stat === 2 ? 'text-slate-400' :
        stat === 3 ? 'text-orange-500' :
        stat === 4 ? 'text-red-500' : ''
      )}}
    >{(
      stat === 0 ? 'Rumored' :
      stat === 1 ? 'Scheduled' :
      stat === 2 ? 'Past Event' :
      stat === 3 ? 'Postponed' :
      stat === 4 ? 'Cancelled' : ''
    )}</span>
  }

  useEffect(() => {
    setInterval(() => {
      time.duration()
      setCountdown(time.countdown)
    }, 1000)
  }, [])

  return (
    <div {...{className: 'event '+(dateTime < curDate ? ' brightness-50 pointer-events-none ' : '')}}>

      <span className="event-actions flex justify-center">
        <p className="text-center text-xl">
          <FontAwesomeIcon className="fa-edit" title="Edit event" icon={faEdit} onClick={()=>staffAction('edit')} />&nbsp;
          <FontAwesomeIcon className="fa-xmark" title="Delete event" icon={faSquareXmark} onClick={()=>staffAction('delete')} />&nbsp;
          {/* <FontAwesomeIcon className="fa-clock" title="Set reminder 5 Minutes before event starts" icon={faClock} onClick={()=>userAction(true)} /> */}
        </p>
      </span>

      <span className="date">
        {dayjs(splitDate[1] === 'null' ? splitDate[0] : dateTime).format('YYYY ddd MMM D')}
      </span>

      <span className="time">
        {splitDate[1] === 'null' ? 'TBA' : dayjs(dateTime).format('HH:mm')+' KST'}
      </span>

      <span {...getCategoryColor(category)}>{category}</span>

      <span className="eventname">
        <Link target="_blank" href={link || twitterLink}>{eventName}</Link>
      </span>

      <span className="countdown">        
        {
          dateTime < curDate ? 
            <>
              {/* <span className="commenced">COMMENCED</span> */}
              <div className="text-slate-400">
                {useTimeString(pastTime(countdown), 'commenced')} ago
              </div>
            </>
          : <div>{countdown?.match(/^0d 0h 0m -[0-3]s/g) ? <span className="text-xs !font-bold text-yellow-500 animate-pulse">EVENT HAS STARTED!</span> : useTimeString(countdown, 'remaining')}</div>
        }
      </span>
      
      <span className="eventinfo">
        <div className="confirmed">
          <span title="Officially confirmed by aespa/SM Entertainment">{confirmed ? '✓' : ''}</span>
        </div>

        <div className="status">
          {getStatusClass(status)}
        </div>
      </span>

    </div>
  )
}

export default Event