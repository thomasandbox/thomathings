import { things } from '../../data'
import { getDate } from './getDate'

export function getPaths() {
  const paths = things.flatMap((thing) => {
    const date = getDate(thing.date)

    return {
      params: {
        year: date.year,
        month: date.month,
        day: date.day,
        title: thing.title.replaceAll(' ', '-'),
      },
    }
  })

  return paths
}
