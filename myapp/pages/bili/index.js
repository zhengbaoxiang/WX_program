// pages/bili/index.js
const util = require('../../utils/util.js')


const imageCdn = '//i0.hdslb.com/bfs/archive/';
const swiperList = [
  {
    value: `${imageCdn}9d7fc85da6765504e075b7203cdbcaf1daed31ec.jpg@960w_540h_1c.webp`,
    ariaLabel: '图片1',
  },
  {
    value: `//i0.hdslb.com/bfs/archive/8cf5cf43701e6539f4db26141d40a0b099b2e3af.jpg@960w_540h_1c.webp`,
    ariaLabel: '图片2',
  },
  {
    value: `${imageCdn}bdb65781d6e4205ee2994c99b8f9055ddd06732e.jpg@960w_540h_1c.webp`,
    ariaLabel: '图片3',
  },
];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    image: '//i0.hdslb.com/bfs/static/jinkela/long/mstation/logo-bilibili-pink.png@132w_60h_1c.webp',
    stickyProps: {
      zIndex: 2,
    },
    swiperList,
    tabValue:0,
    dataList:[
      {
        id:7,
        title:'"看好了，这才叫《咒术回战》"',
        picUrl:'//i0.hdslb.com/bfs/archive/4c0da96ae643d912b09d6b19b178e194b2258056.jpg@960w_540h_1c.webp'
      },
      {
        id:8,
        title:'《咒术回战》第二季「涉谷事变」NCOP【MCE汉化组】',
        picUrl:'//i0.hdslb.com/bfs/archive/d2e327b52e743caee7dcc99818a033129fa5f984.png@960w_540h_1c.webp'
      },
      {
        id:1,
        title:'“你暗恋的已经够明显了，只是她不喜欢你”',
        picUrl:'//i0.hdslb.com/bfs/archive/9d0008a4340ba7308829d5b4d55577889a4338e5.jpg@960w_540h_1c.webp'
      },
      {
        id:2,
        title:'《原神》宵宫PV短片——「辉夜寄思」',
        picUrl:'//i0.hdslb.com/bfs/archive/bdb65781d6e4205ee2994c99b8f9055ddd06732e.jpg@960w_540h_1c.webp'
      },
      {
        id:3,
        title:'救下了想自鲨的女孩后，发现她真的好可爱【你的头上有数字02】',
        picUrl:'//i0.hdslb.com/bfs/archive/e01eefa5875e50fe2a98df74b19bc62fbc62f7b8.jpg@960w_540h_1c.webp'
      },
      {
        id:4,
        title:'推荐一部牛头人爱看的番',
        picUrl:'//i0.hdslb.com/bfs/archive/191547c5a6432f7beba3ab9d1a4e6820ce6f2217.jpg@960w_540h_1c.webp'
      },
      {
        id:5,
        title:'盘点男女主开局恋爱特别甜的动漫',
        picUrl:'//i0.hdslb.com/bfs/archive/f00c011fbfdea146d67423cde8e7887408d93752.jpg@960w_540h_1c.webp'
      },
      {
        id:6,
        title:'盘点动漫史上那些顶级的神插入！第二十四期',
        picUrl:'//i0.hdslb.com/bfs/archive/15bdc3e4944885db3bd1abd2d4c5f526533c02eb.jpg@960w_540h_1c.webp'
      },
   
    ],
    url:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'

  },
  onTabsChange(event) {
    this.setData({
      tabValue: event.detail.value,
    });
    console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
  },
  onTabsClick(event) {
    const list = util.shuffleArray(this.data.dataList)
    console.log('list',list)
    this.setData({
      dataList:list
    })
  },
  onShareTap(event) {
    console.log(`onShareTap value is ${event.detail.value}.`);
  },
  onTabBarChange(e) {
    this.setData({
      value: e.detail.value,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('onLoad-options',options)
    console.log('onLoad-url',this.data.url)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('onReady-url',this.data.url)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  // 调用自定义tabbar的init函数，使页面与tabbar激活状态保持一致
  onShow() {
      this.getTabBar().init();
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