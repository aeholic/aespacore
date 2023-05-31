// KoreaTime Component

"use client"

import moment from "moment"
import { useState, useEffect } from "react"

const KoreaTime = () : JSX.Element => {
  
  let kst = '00:00:00 00/00/00'
  const [currentTime, setCurrentTime] = useState(kst)

  useEffect(() => {
    setInterval(() => {
      let kst = moment().utcOffset(540).format('hh:mm:ss YY/MM/DD')
      setCurrentTime(kst)
    }, 1000)
  }, [])

  return <span className="koreatime self-end">KST {currentTime}</span>
}

export default KoreaTime