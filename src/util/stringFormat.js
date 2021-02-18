// 对存档的各种内容进行格式化

// 用来解决存档中多余的<<字符
export const srtingFormat = (str) => {
  str = str.split('<')[0]
  if (str.startsWith('-')) str = str.slice(1)
  return str
}

// 数值补0
export const numberFormat = (number) => {
  return number.toString().padStart(2, '0')
}
// 地图合并
export const mapFormat = (map1, map2) => {
  return `${srtingFormat(map1.zh_CN)} ${srtingFormat(map2.zh_CN)}`
}

// 时间处理
export const timeFormat = (time) => {
  const _ = Number.parseInt

  return `
    ${numberFormat(_(time / 60 / 60))} :
    ${numberFormat(_(time / 60) % 60)} :
    ${numberFormat(_(time % 60))}
  `
}
