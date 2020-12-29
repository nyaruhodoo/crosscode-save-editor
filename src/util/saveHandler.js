import { AES, enc } from 'crypto-js'
const { decrypt, encrypt } = AES

const secretKey = ':_.NaN0'
const mark = '[-!_0_!-]'

const isPc = (value) => {
  return value.startsWith(mark)
}

// 单条数据解密
const _decrypt = (value, pc) => {
  if (pc) {
    value = value.slice(mark.length)
    return JSON.parse(decrypt(value, secretKey).toString(enc.Utf8))
  } else {
    return JSON.parse(value)
  }
}
// 单条数据加密
const _encrypt = (value, pc) => {
  value = JSON.stringify(value)

  if (pc) {
    return mark + encrypt(value, secretKey).toString()
  } else {
    return value
  }
}

// 存档解密
export const decryption = (save) => {
  save = JSON.parse(save)
  const pc = isPc(save.autoSlot)
  save.autoSlot = _decrypt(save.autoSlot, pc)
  save.slots = save.slots.map((i) => _decrypt(i, pc))

  return { save, pc }
}
// 存档加密
export const encryption = (save, pc) => {
  save = JSON.parse(JSON.stringify(save))
  save.autoSlot = _encrypt(save.autoSlot, pc)
  save.slots = save.slots.map((i) => _encrypt(i, pc))
  return JSON.stringify(save)
}
