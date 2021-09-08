import { format } from 'date-fns'

export function formatDate(date: string) {
  const formattedDate = format(new Date(date), 'PPp')
  return formattedDate
}
