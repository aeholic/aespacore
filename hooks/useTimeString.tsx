type TimeColorizerProps = {
  counter?: string | number
  unit?: string
}

type TimeString = {
  (
    str: string | undefined, 
    mode: 'date' | 'time' | 'remaining'
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

interface iRemainingMode {
  d?: any
  h?: any
  m?: any
  s?: any
}

export const timeColorizer = ( params: TimeColorizerProps): JSX.Element => {
  return (
    <>
      {params.counter} <span className='countdown'> {params.unit}</span>
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
        {timeColorizer({counter: rgxt.hours, unit: ':'})}
        {timeColorizer({counter: rgxt.minutes, unit: ':'})}
        {timeColorizer({counter: rgxt.seconds})}
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
        {timeColorizer({counter: rgxd.year, unit: '-'})}
        {timeColorizer({counter: rgxd.month, unit: '-'})}
        {timeColorizer({counter: rgxd.day})}
      </>
    )
  } else if (mode === 'remaining') {
    const rgxr: iRemainingMode = {}

    rgxr.d = str?.match(/\-?\d+(?=d)/g)
    rgxr.h = str?.match(/\-?\d+(?=h)/g) 
    rgxr.m = str?.match(/\-?\d+(?=m)/g)
    rgxr.s = str?.match(/\-?\d+(?=s)/g)

    return (
      <>
        {timeColorizer({counter: Math.abs(rgxr.d), unit: 'd'})}
        {timeColorizer({counter: Math.abs(rgxr.h), unit: 'h'})}
        {timeColorizer({counter: Math.abs(rgxr.m), unit: 'm'})}
        {timeColorizer({counter: Math.abs(rgxr.s), unit: 's'})}
      </>
    )
  } else {
    return <>{str}</>
  }
}