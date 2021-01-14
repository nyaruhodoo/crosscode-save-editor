import { AES, enc } from 'crypto-js'
const { decrypt, encrypt } = AES

const secretKey = ':_.NaN0'
const mark = '[-!_0_!-]'

const saveMode = (value) => {
  return value.startsWith(mark) ? 'pc' : 'switch'
}

// 单条数据解密
const _decrypt = (value, pc) => {
  if (pc === 'pc') {
    value = value.slice(mark.length)
    return JSON.parse(decrypt(value, secretKey).toString(enc.Utf8))
  } else {
    return JSON.parse(value)
  }
}
// 单条数据加密
const _encrypt = (value, pc) => {
  value = JSON.stringify(value)

  if (pc === 'pc') {
    return mark + encrypt(value, secretKey).toString()
  } else {
    return value
  }
}

// 存档解密
export const decryption = (save) => {
  save = JSON.parse(save)
  const mode = saveMode(save.autoSlot)
  save.autoSlot = _decrypt(save.autoSlot, mode)
  save.slots = save.slots.map((i) => _decrypt(i, mode))

  return { save, mode }
}
// 存档加密
export const encryption = (save, mode) => {
  save = JSON.parse(JSON.stringify(save))
  save.autoSlot = _encrypt(save.autoSlot, mode)
  save.slots = save.slots.map((i) => _encrypt(i, mode))
  return JSON.stringify(save)
}
