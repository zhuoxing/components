// components/SeachBar/SearchBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowCancel: true, // 是否显示取消按钮
    inputValue: '', // 输入框的值
    showSelectList: true // 控制下拉列表的显示与隐藏
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击输入框
    showInput() {
      this.setData({
        isShowCancel: false
      })
    },
    // 点击取消按钮
    cancel() {
      this.setData({
        isShowCancel: true,
        inputValue: ''
      })
    },
    // 监听输入框输入事件实时更新输入框绑定的值
    inputValue(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    // 点击clear清空输入框的值
    clearValue() {
      this.setData({
        inputValue: ''
      })
    },
    // 点击下拉显示下拉列表
    showSelect() {
      this.setData({
        showSelectList: !this.data.showSelectList
      })
    }
  }
})
