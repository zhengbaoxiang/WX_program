// index.js
import Toast from 'tdesign-miniprogram/toast/index';
const defaultAvatarUrl = '//i0.hdslb.com/bfs/face/member/noface.jpg@48w_48h_1c.webp'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    historyList:[
      {
        id:6,
        title:'盘点动漫史上那些顶级的神插入！第二十四期',
        picUrl:'//i0.hdslb.com/bfs/archive/15bdc3e4944885db3bd1abd2d4c5f526533c02eb.jpg@960w_540h_1c.webp'
      },
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
    ],
    favList:[
      {
        id:1,
        title:'“你暗恋的已经够',
        picUrl:'//i0.hdslb.com/bfs/archive/9d0008a4340ba7308829d5b4d55577889a4338e5.jpg@960w_540h_1c.webp'
      },
      {
        id:2,
        title:'《原神》宵宫PV短片——「辉夜寄思」',
        picUrl:'//i0.hdslb.com/bfs/archive/bdb65781d6e4205ee2994c99b8f9055ddd06732e.jpg@960w_540h_1c.webp'
      },
      {
        id:5,
        title:'盘点男女主开局恋爱特别甜的动漫',
        picUrl:'//i0.hdslb.com/bfs/archive/f00c011fbfdea146d67423cde8e7887408d93752.jpg@960w_540h_1c.webp'
      },
    ]
  },
  btnClick() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: 'are you ok ?',
      theme: 'success',
    });
  },
  goHistory() {
    console.log(1)
  },
  goFav() {
    console.log(2)
  },
  feedback() {
    wx.navigateTo({
      url: '../feedback/feedback'
    })
  },
  logout() {
    this.setData({
      hasUserInfo: false
    })
  },
  // 生命周期函数
  onReady(options) {

  },
  onload(){

  },
  onShow() {
  // 调用自定义tabbar的init函数，使页面与tabbar激活状态保持一致
    this.getTabBar().init();
  },
})
