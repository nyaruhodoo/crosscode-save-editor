/*
 * @Description: 处理cc存档的加解密
 * @LastEditTime: 2021-01-30 15:35:43
 */
import { AES, enc } from 'crypto-js'
const { decrypt, encrypt } = AES

// 加密密码
const key = ':_.NaN0'
// 标识符
const mark = '[-!_0_!-]'

// 判断存档是哪个平台
const saveMode = (value) => {
  return value.startsWith(mark) ? 'pc' : 'switch'
}

// 单条数据解密
const _decryption = (value, pc) => {
  if (pc === 'pc') {
    value = value.slice(mark.length)
    return JSON.parse(decrypt(value, key).toString(enc.Utf8))
  } else {
    return JSON.parse(value)
  }
}
// 单条数据加密
const _encryption = (value, pc) => {
  value = JSON.stringify(value)

  if (pc === 'pc') {
    return mark + encrypt(value, key).toString()
  } else {
    return value
  }
}

// 存档解密
export const saveDecryption = (save) => {
  save = JSON.parse(save)
  const mode = saveMode(save.autoSlot)
  save.autoSlot = _decryption(save.autoSlot, mode)
  save.slots = save.slots.map((i) => _decryption(i, mode))

  return { save, mode }
}
// 存档加密
export const saveEncryption = (save, mode) => {
  save = JSON.parse(JSON.stringify(save))
  save.autoSlot = _encryption(save.autoSlot, mode)
  save.slots = save.slots.map((i) => _encryption(i, mode))
  return JSON.stringify(save)
}
