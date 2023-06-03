// EventTimer.js

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import duration from 'dayjs/plugin/duration'

dayjs.extend(utc)
dayjs.extend(duration)

type Action = { action: any }

type EventTimerInit = Action & {
  targetTime: string
  countdown: string
  UTCtimezone?: number
  format?: string
}

interface iEventTimer extends EventTimerInit {
  krTime(): void
  duration(): void
  expired(action: Action): void
}

export default class EventTimer implements iEventTimer {

  public targetTime: string = '2030-01-01 00:00:00'
  public countdown: string = '0d 0h 0m 0s' 
  public UTCtimezone: number = 540 
  public format: string = 'YYYY/MM/DD HH:mm:ss' 
  public action: any = 'DING DONG!'
  
  constructor(init: EventTimerInit) {
    this.targetTime = init.targetTime
    this.countdown = init.countdown
    this.UTCtimezone = init.UTCtimezone || this.UTCtimezone
    this.format = init.format || this.format
    this.action = init.action || this.action
  }
  
  public krTime(): string {
    return dayjs().utcOffset(this.UTCtimezone).format(this.format)
  }
  
  public duration(): string {
    const 
      now: dayjs.Dayjs | string = this.krTime(), 
      target: dayjs.Dayjs = dayjs(this.targetTime),
      duration: duration.Duration = dayjs.duration(target.diff(now)),
      days: number = Math.floor(duration.asDays()),
      hours: number = duration.hours(),
      minutes: number = duration.minutes(),
      seconds: number = duration.seconds()
      
    this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`
    
    return days+hours+minutes+seconds <= 0 ? 'DING DONG' : this.countdown
  }

  public expired(action: Action): void {
    this.action = action
  }
}