// Event Component

"use client"

import { useState, useEffect, ReactNode, useRef } from 'react'
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

const month: any = {
  Jan: false, Feb: false, Mar: false,
  Apr: false, May: false, Jun: false,
  Jul: false, Aug: false, Sep: false,
  Oct: false, Nov: false, Dec: false
}

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
    [countdown, setCountdown] = useState<string | undefined>('000d 00h 00m 00s'),
    curDate = dayjs().utcOffset(540).format('YYYY-MM-DD HH:mm:ss'),
    abcRef = useRef<HTMLSpanElement | string | null | any>(null)

  const staffAction: Function = (mode: 'edit' | 'delete'): void => {
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

  const
    eventDateFormat: string = dayjs(splitDate[1] === 'null' ? splitDate[0] : dateTime).format('YYYY ddd MMM D'),
    eventTimeFormat: string = splitDate[1] === 'null' ? 'TBA' : dayjs(dateTime).format('HH:mm')+' KST'

  useEffect(()=> { abcRef.current!.textContent = addMonth().join('') }, [])

  useEffect(() => {
    setInterval(() => {
      time.duration()
      setCountdown(time.countdown)
    }, 1000)
  }, [])
  
  const addMonth = () => {
    const [rgx, year]: [string, string] = [
      eventDateFormat.match(/(?<=\d+\s\w..\s)\w+/g)![0],
      eventDateFormat.match(/\d{4}/)![0]
    ]
    
    const monthsx: any = {
      Jan: 'January', Feb: 'February', Mar: 'March',
      Apr: 'April', May: 'May', Jun: 'June',
      Jul: 'July', Aug: 'August', Sep: 'September',
      Oct: 'October', Nov: 'November', Dec: 'December'
    }

    return Object.keys(monthsx).map((k: any) => {
      if (!month[rgx] && rgx === k) {
        month[rgx] = true
        return monthsx[rgx].toUpperCase()+' '+year
      } else return '' 
    })
  }

  return (
    <>
      {<span className="text-xl flex flex-stretch bg-slate-800 px-2 text-pink-500 pt-2" ref={abcRef}></span>}
      <div {...{className: 'event '+(dateTime < curDate ? ' brightness-50 pointer-events-none ' : '')}}>
        <span className="event-actions flex justify-center">
          <p className="text-center text-xl">
            <FontAwesomeIcon className="fa-edit" title="Edit event" titleId="Edit event" icon={faEdit} onClick={()=>staffAction('edit')} />&nbsp;
            <FontAwesomeIcon className="fa-xmark" title="Delete event" titleId="Delete event" icon={faSquareXmark} onClick={()=>staffAction('delete')} />&nbsp;
            {/* <FontAwesomeIcon className="fa-clock" title="Set reminder 5 Minutes before event starts" icon={faClock} onClick={()=>userAction(true)} /> */}
          </p>
        </span>

        <span className="date">{eventDateFormat}</span>

        <span className="time">{eventTimeFormat}</span>

        <span {...getCategoryColor(category)}>{category}</span>

        <span className="eventname">
          <Link target="_blank" href={link || twitterLink}>{eventName}</Link>
        </span>

        <span className="countdown">        
          {
            dateTime < curDate ? 
              <>
                <div className="text-slate-400">
                  {useTimeString(pastTime(countdown), 'commenced')} ago
                </div>
              </>
            : <div>
                {
                  countdown?.match(/^0d 0h 0m -[0-3]s/g) ? 
                    <span className="text-xs !font-bold text-yellow-500 animate-pulse">EVENT HAS STARTED!</span> : 
                    useTimeString(countdown, 'remaining')
                }
              </div>
          }
        </span>
        
        <span className="eventinfo">
          <div className="confirmed">
            <span title="Officially confirmed by aespa/SM Entertainment">{confirmed ? '✓' : ''}</span>
          </div>

          <div className="status">{getStatusClass(status)}</div>
        </span>

      </div>
    </>
  )
}

export default Event