// TYPE DEFINITIONS

export type Children = {
  children: React.ReactNode
}

export type EventProps = {
  [key: string]: React.ReactNode
  eventName: string
  dateTime?: string
  date: string
  time?: string
  category: string
  confirmed?: boolean
  link?: string
  image?: string
  status: number
  reminder: boolean
} & []

export type EventComponentProps = {
  [key: string]: React.ReactNode
  dateTime: string
  eventName: string
  category: string
  confirmed: boolean
  link?: string
}