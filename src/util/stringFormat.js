// 用来解决存档中多余的<<字符
export const srtingFormat = (str) => {
  str = str.split('<')[0]
  if (str.startsWith('-')) str = str.slice(1)
  return str
}
