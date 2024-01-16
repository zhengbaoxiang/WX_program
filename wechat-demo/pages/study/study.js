// pages/study/study.js
Page({
  // 页面的初始数据 - vue 中的data
  data: {
    msg:'这是一条文本消息',
    num:1,
    mycolor:"red",
    obj:{
      name:'张策'
    },
    list:[
      {
        id:1,title:'张三'
      },
      {
        id:2,title:'李四'
      },
      {
        id:3,title:'王八蛋'
      },
    ]
  },
// 处理自定义事件
  btnClick:function(e){
    this.setData({
      num:this.data.num + 1
    })
  },
  
  //  生命周期函数--监听页面加载
  onLoad(options) {

  },
//监听页面初次渲染完成
  onReady() {  },

//生命周期函数--监听页面显示 / 监听页面隐藏 / 页面卸载
  onShow() {  },
  onHide() {  },
  onUnload() {  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh() { },

  //页面上拉触底事件的处理函数
  onReachBottom() {  },

  //用户点击右上角分享
  onShareAppMessage() {  }


})