// TYPE DEFINITIONS

export type Children = {
  children: React.ReactNode
}

export type EventProps = {
  eventName: string
  dateTime: string
  date: string
  time?: string
  category: string
  confirmed?: boolean
} & []

export type EventComponentProps = {
  dateTime: string
  eventName: string
  category: string
  confirmed: boolean
}