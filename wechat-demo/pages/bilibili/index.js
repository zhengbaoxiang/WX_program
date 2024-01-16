// pages/bilibili/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:['推荐','动漫','漫画'],
    videoList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getVideoList()
  },
  getVideoList() {
    this.setData({
      videoList: [{
          id: 1,
          title: '“可惜我相貌平平，惊艳不了你的青春....”',
          author: '罪恶王冠',
          playTimes: '130.6w',
          date: '10-14',
          img: '//i2.hdslb.com/bfs/archive/723b20657dff1de90043f736ff0b41818136acf9.jpg@480w_270h_1c'
        },
        {
          id: 2,
          title: '六年前站全是这种视频！！!～',
          author: '楪祈',
          playTimes: '40.3w',
          date: '10-13',
          img: '//i2.hdslb.com/bfs/archive/421bff6f0a5f6a658d47062923e2c425aa93f32e.jpg@480w_270h_1c'
        },
        {
          id: 3,
          title: '《妈妈的话》使我懂得“未来不会遇到动漫中的女孩”',
          author: '蕾姆',
          playTimes: '395.9w',
          date: '10-12',
          img: '//i1.hdslb.com/bfs/archive/23183b5913c1b983074c8ad6b4df1299bdddc6e6.jpg@480w_270h_1c'
        },
        {
          id: 4,
          title: '“𝙔𝙤𝙪&apos;𝙧𝙚 𝙨𝙤 𝙗𝙚𝙖𝙪𝙩𝙞𝙛𝙪𝙡”',
          author: '帕拉迪岛',
          playTimes: '5.8w',
          date: '10-11',
          img: '//i0.hdslb.com/bfs/archive/404e3f7fbd0347ee4ead7e3f4ec1b42703a5f22f.jpg@480w_270h_1c'
        },
        {
          id: 5,
          title: '“救赎也许是另一种折磨”',
          author: '少年派',
          playTimes: '40.3w',
          date: '10-14',
          img: '//i2.hdslb.com/bfs/archive/1e94b54c90e876fbfc0806e98de7b0cf8b53312b.jpg@480w_270h_1c'
        },
        {
          id: 6,
          title: '“当你身处迷茫困境中，就让这首《𝘿𝙖𝙮𝞘𝙞𝙜𝙝𝙩》来治愈你吧”',
          author: '万阳',
          playTimes: '40.3w',
          date: '10-14',
          img: '//i1.hdslb.com/bfs/archive/43e7b4d4f4b0ae898e2accd7b1b8d2eff473fed7.jpg@480w_270h_1c'
        },
      ]
    })

  },

  cardClick: function (r) {
    wx.navigateTo({
      url: '../video/detail'
    })
    console.log(r)
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})