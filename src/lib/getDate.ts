interface GetDateReturn {
  year: string
  month: string
  day: string
}

export function getDate(date: string): GetDateReturn {
  const currentDate = new Date(date)
  const year = currentDate.getFullYear().toString().padStart(2, '0')
  const month = currentDate.getMonth().toString().padStart(2, '0')
  const day = currentDate.getDate().toString().padStart(2, '0')

  return {
    year,
    month,
    day,
  }
}
