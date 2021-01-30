// 用于修复存档的兼容性
export default (save) => {
  // 二周目
  if (!save.newGamePlus || !save.newGamePlus.options) {
    save.newGamePlus = {
      options: {},
      active: false,
      store: {}
    }
  }
}
