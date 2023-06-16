/** 
 * EventTimer.js v.0.90
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
import { type } from 'os'

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
 * @type TimeUnits,
 * Type for the EventTimer class
 */
export type TimeUnits = {
  days?: string | number | null
  hours?: string | number | null
  minutes?: string | number | null
  seconds?: string | number | null
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
export default class EventTimer implements iEventTimer, TimeUnits {

  public targetTime: string = '2030-01-01 00:00:00'
  public countdown: string = '00d 00h 00m 00s' 
  public UTCtimezone: number = 540 
  public format: string = 'YYYY-MM-DD HH:mm:ss' 
  public action: any = 'DING DONG!'

  public days: string | number = ''
  public hours: string | number = ''
  public minutes: string | number = ''
  public seconds: string | number = ''
  
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
  public duration(): void {
    const 
      now: dayjs.Dayjs | string = this.krTime(), 
      target: dayjs.Dayjs = dayjs(this.targetTime),
      duration: duration.Duration = dayjs.duration(target.diff(now))
    this.days = Math.floor(duration.asDays())
    this.hours = duration.hours()
    this.minutes = duration.minutes()
    this.seconds = duration.seconds()
      
    this.countdown = `${this.days}d ${this.hours}h ${this.minutes}m ${this.seconds}s`
    
    //return this.days+this.hours+this.minutes+this.seconds <= 0 ? this.action : this.countdown
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

  public getTimerUnit(): TimeUnits {
    return {
      days: this.days,
      hours: this.days,
      minutes: this.days,
      seconds: this.days
    } 
  }
}