import moment from 'moment'

export function formattedDate(date: Date) {
  return moment(date).fromNow()
}
