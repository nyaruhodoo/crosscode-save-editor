// 用来解决存档中多余的<<标志
export const srtingFormat = (str) => {
  str = str.split('<')[0]
  if (str.startsWith('-')) str = str.slice(1)
  return str
}
