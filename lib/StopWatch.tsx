/** 
 * StopWatch.js 2023 (c) @aeholic github.com/aeholic
 * -----------------------
*/

export default class StopWatch {

	public timeBegan: any = null
	public timeStopped: any = null
	public stoppedDuration: any = 0 
	public started: any = null
	public stateOutput: Function

	constructor(stateFunction: Function) {
		this.stateOutput = stateFunction
	}

	// private output(arg: any) {
	// 	return arg
	// }

	public clockRunning() {
		const 
			currentTime:any = new Date(), 
			timeElapsed = new Date(currentTime - this.timeBegan - this.stoppedDuration), 
			hour = timeElapsed.getUTCHours(), 
			min = timeElapsed.getUTCMinutes(), 
			sec = timeElapsed.getUTCSeconds(), 
			ms = timeElapsed.getUTCMilliseconds()

		return (
			(hour > 9 ? hour : "0" + hour) + ":" + 
			(min > 9 ? min : "0" + min) + ":" + 
			(sec > 9 ? sec : "0" + sec) + "." + 
			(ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms)
		)
	}

	public start() {
		if (this.timeBegan === null) {
				this.timeBegan = new Date()
		}
		if (this.timeStopped !== null) {
				// @ts-ignore
				this.stoppedDuration += (new Date() - this.timeStopped)
		}

		this.started = setInterval(this.clockRunning, 10)
	}

	public stop() {
		this.timeStopped = new Date()
		clearInterval(this.started)
	}

	public reset() {
		clearInterval(this.started)
		this.stoppedDuration = 0
		this.timeBegan = null
		this.timeStopped = null

		return '00:00:00.000'
	}
}