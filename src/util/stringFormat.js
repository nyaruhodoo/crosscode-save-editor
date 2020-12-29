export const srtingFormat = (str) => {
  str = str.split('<')[0]
  if (str.startsWith('-')) str = str.slice(1)
  return str
}
