class dict {
  constructor(dictJSON) {
    this.dictJSON = dictJSON
  }

  /**
   * 获取字典真实值
   * @param {*} key 字典集的key值
   * @param {*} value 字典枚举值
   * @returns 展示得值
   */
  getLabel(key, value) {
    if (this.dictJSON[key]) {
      const temp = this.dictJSON[key].find(item => item.value == value)
      return temp && temp.label
    }
    return "-"
  }

  /**
   * 返回dictJSON中对应key的原始数据
   * @param {*} key
   * @returns {*} 字典key对应的value值
   */
  getData(key) {
    if (key) {
      return this.dictJSON[key]
    } else {
      return this.dictJSON
    }
  }

  // todos: 关于后续类似产业tree的处理，以及对字典处理的方法。
}

export default dict
