// 用于修复存档的兼容性
export const saveCompatibility = (save) => {
  // 二周目
  if (!save.newGamePlus || !save.newGamePlus.options) {
    console.log('修复成功')
    save.newGamePlus = {
      options: {},
      active: false,
      store: {}
    }
  }
}
