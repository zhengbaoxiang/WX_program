//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    msg: 'Hello World',
    userInfo: {},
  },
  onLoad: function (options) {
    // console.log('this',this)
    this.getUserInfo()
  },
  //事件处理函数
  getUserInfo: function () {
    console.log('getUserInfo',this.data)
    this.setData({
      userInfo: {
        avatarUrl: "../../images/headImg.png",
        nickName: '高瘦的帅哥'
      },
      hasUserInfo: true
    })
  },
  logout: function (e) {
    console.log('logout',e)
  },
  toStudy: function (e) {
    console.log('toStudy', e)
    wx.navigateTo({
      url: '../study/study'
    })
  },
 
  
})
