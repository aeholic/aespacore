/** 
 * EventTimer.js
 * 2023 (c) @aeholic
 * github.com/aeholic
 * -----------------------
 * 
 * Time and date calculator, timezone converter and countdown parser packed 
 * in 1 class optimized for aespacore app at @GitHub aeholic/aespacore. 
*/

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import duration from 'dayjs/plugin/duration'

dayjs.extend(utc)
dayjs.extend(duration)

type Action = { action?: any }

/**
 * @type EventTimerInit
 * @extends {Action}
*/
export type EventTimerInit = Action & {
  targetTime?: string
  countdown?: string
  UTCtimezone?: number
  format?: string
}

/**
 * Interface for the {EventTimer} class
 * @export
 * @interface iEventTimer
 * @extends {EventTimerInit}
*/
export interface iEventTimer extends EventTimerInit {
  krTime(): void
  duration(): void
  setAction(action: Action): void
  setTargetTime(target: string): void
}

/**
 * EventTimer main class.
 * @export
 * @class EventTimer
 * @implements {iEventTimer}
*/
export default class EventTimer implements iEventTimer {

  public targetTime: string = '2030/01/01 00:00:00'
  public countdown: string = '0d 0h 0m 0s' 
  public UTCtimezone: number = 540 
  public format: string = 'YYYY/MM/DD HH:mm:ss' 
  public action: any = 'DING DONG!'
  
  /**
   * Creates an instance of EventTimer.
   * @param {EventTimerInit} init
   * @memberof EventTimer
  */
  constructor(init: EventTimerInit) {
    this.targetTime = init.targetTime || this.targetTime
    this.countdown = init.countdown || this.countdown
    this.UTCtimezone = init.UTCtimezone || this.UTCtimezone
    this.format = init.format || this.format
    this.action = init.action || this.action
  }

  /**
   * Parses the Korean time and date.
   * @return {*}  {string}
   * @memberof EventTimer
  */
  public krTime(): string {
    return dayjs().utcOffset(this.UTCtimezone).format(this.format)
  }

  /**
   * Calculates the duration for the countdown.
   * @return {*} {string}
   * @memberof EventTimer
  */
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
    
    return days+hours+minutes+seconds <= 0 ? this.action : this.countdown
  }
  
  /**
   * Sets the target date and time separately.
   * @param {string} target
   * @memberof EventTimer
  */
  public setTargetTime(target: string): void {
    this.targetTime = target
  }

  /**
   * Sets the action that is triggered after the countdown expires.
   * @param {Action} action
   * @memberof EventTimer
  */
  public setAction(action: Action): void {
    this.action = action
  }
}