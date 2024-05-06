export function daysUntilNextChristmas(): number {
  const today = new Date()
  const currentYear = today.getFullYear()
  const christmas = new Date(currentYear, 11, 25)
  if (today > christmas) {
    christmas.setFullYear(currentYear + 1)
  }
  const oneDay = 24 * 60 * 60 * 1000
  const daysLeft = Math.ceil((christmas.getTime() - today.getTime()) / oneDay)

  return daysLeft
}
