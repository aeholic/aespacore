// Event Component

"use client"

const Event: React.FC = () : JSX.Element => {

  return (
    <div className="event">
      <span className="date">Sat, June 10</span>
      <span className="time">07:30</span>
      <span className="eventname">The Governors Ball Music Festival @ Flushing Meadows Corona Park, New York City, USA</span>
      <span className="remaining">0d 07h 30m 58s</span>
      <span className="confirmed">C</span>
      <span className="remaining">⌛</span>
    </div>
  )
}

export default Event