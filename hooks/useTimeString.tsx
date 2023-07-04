import '§/app/globals.css'

type TimeColorizerProps = {
  counter?: string | number
  unit?: string
  style?: string
}

type TimeString = {
  (
    str: string | void | undefined, 
    mode: 'date' | 'time' | 'remaining' | 'commenced' | 'stopwatch'
  ): JSX.Element | string
}

interface iTimeMode {
  time?: any
  hours?: any
  minutes?: any
  seconds?: any
}

interface iDateMode {
  date?: any
  year?: any
  month?: any
  day?: any
}

interface iUnitMode {
  d?: any
  h?: any
  m?: any
  s?: any
}

interface iStopWatchMode {
  hr?: any
  min?: any
  sec?: any
  ms?: any
}

export const timeColorizer = ( params: TimeColorizerProps): JSX.Element => {
  return (
    <>
      {params.counter}{params.unit && <span {...{className: params.style}}>{params.unit}</span>}
    </>
  )
}

export const useTimeString: TimeString = (str, mode) => {
  if (mode === 'time') {
    const rgxt: iTimeMode = {}

    rgxt.time = str?.match(/\d+\:\d+\:\d+/g)
    rgxt.hours = rgxt.time[0]?.match(/^\d+/g)
    rgxt.minutes = rgxt.time[0]?.match(/\:(.*?)\:/g)[0].replace(/:/g, '')
    rgxt.seconds = rgxt.time[0]?.match(/\d+$/g)[0]
    
    return (
      <>
        {timeColorizer({counter: rgxt.hours, unit: ':', style: 'krtime'})}
        {timeColorizer({counter: rgxt.minutes, unit: ':', style: 'krtime'})}
        {timeColorizer({counter: rgxt.seconds, style: 'krtime'})}
      </>
    )
  } else if (mode === 'date') {
    const rgxd: iDateMode = {}
    
    rgxd.date = str?.match(/\d+\-\d+\-\d+/g)
    rgxd.year = rgxd.date[0]?.match(/\d{4}/g) 
    rgxd.month = rgxd.date[0]?.match(/\-\d{2}\-/g)[0].replace(/\-/g, '')
    rgxd.day = rgxd.date[0]?.match(/\d+$/g)[0]
    
    return (
      <>
        {timeColorizer({counter: rgxd.year, unit: '-', style: 'krtime'})}
        {timeColorizer({counter: rgxd.month, unit: '-', style: 'krtime'})}
        {timeColorizer({counter: rgxd.day})}
      </>
    )
  } else if (mode === 'remaining') {
    const rgxr: iUnitMode = {}

    rgxr.d = str?.match(/\-?\d+(?=d)/g)
    rgxr.h = str?.match(/\-?\d+(?=h)/g) 
    rgxr.m = str?.match(/\-?\d+(?=m)/g)
    rgxr.s = str?.match(/\-?\d+(?=s)/g)

    return (
      <>
        {timeColorizer({counter: Math.abs(rgxr.d), unit: 'd', style: 'krtime'})}
        {timeColorizer({counter: Math.abs(rgxr.h), unit: 'h', style: 'krtime'})}
        {timeColorizer({counter: Math.abs(rgxr.m), unit: 'm', style: 'krtime'})}
        {timeColorizer({counter: Math.abs(rgxr.s), unit: 's', style: 'krtime'})}
      </>
    )
  } else if (mode === 'commenced') {
    const rgxr: iUnitMode = {}

    rgxr.d = str?.match(/\-?\d+(?=d)/g)
    rgxr.h = str?.match(/\-?\d+(?=h)/g) 
    rgxr.m = str?.match(/\-?\d+(?=m)/g)
    rgxr.s = str?.match(/\-?\d+(?=s)/g)

    return (
      <>
        {timeColorizer({counter: Math.abs(rgxr.d), unit: 'd', style: 'evtime'})}
        {timeColorizer({counter: Math.abs(rgxr.h), unit: 'h', style: 'evtime'})}
        {timeColorizer({counter: Math.abs(rgxr.m), unit: 'm', style: 'evtime'})}
        {timeColorizer({counter: Math.abs(rgxr.s), unit: 's', style: 'evtime'})}
      </>
    )
  } else if (mode === 'stopwatch') {
    const rgxr: iStopWatchMode = {}

    rgxr.hr = str?.match(/^\d+(?=\:)/g)
    rgxr.min = str?.match(/\:(\d+)\:/g)![0] 
    rgxr.sec = str?.match(/\:(\d+)\./g)![0]
    rgxr.ms = str?.match(/\.(\d+)/g)![0]

    return (
      <>
        {timeColorizer({counter: Math.abs(rgxr.hr), unit: ':', style: 'krtime'})}
        {timeColorizer({counter: Math.abs(rgxr.min), unit: ':', style: 'krtime'})}
        {timeColorizer({counter: Math.abs(rgxr.sec), unit: ':', style: 'krtime'})}
        {timeColorizer({counter: Math.abs(rgxr.ms), unit: '.', style: 'krtime'})}
      </>
    )
  }else {
    return <>{str}</>
  }
}