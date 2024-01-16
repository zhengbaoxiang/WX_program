Page({
  inputValue: '',
  data: {
    src3:"https://cn-hbwh-cm-01-07.bilivideo.com/upgcxcode/69/13/1297691369/1297691369-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1697463113&gen=playurlv2&os=bcache&oi=3083967880&trid=000057fe9a5cd3454ecebd0a67434411ac24h&mid=27372905&platform=html5&upsig=d967b1e2efe77c2f56c97d21fa56147c&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=10203&bvc=vod&nettype=0&f=h_0_0&bw=50783&logo=80000000",
    poster: "http://i2.hdslb.com/bfs/archive/723b20657dff1de90043f736ff0b41818136acf9.jpg@480w_270h_1c",
    title: "可惜我相貌平平，惊艳不了你的青春....",
    danmuList: [{
        text: '第一第一',
        color: '#ff0000',
        time: 1
      }, {
        text: '前排，冲啊',
        color: '#ff00ff',
        time: 3
      },
      {
        text: '美美美',
        color: '#ff00ff',
        time: 6
      },

    ],
  },
  onShareAppMessage() {
    return {
      title: 'video',
      path: 'page/component/pages/video/video'
    }
  },
  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },
  bindButtonTap() {
    const that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },

  bindVideoEnterPictureInPicture() {
    console.log('进入小窗模式')
  },

  bindVideoLeavePictureInPicture() {
    console.log('退出小窗模式')
  },

  bindPlayVideo() {
    console.log('1')
    this.videoContext.play()
  },
  bindSendDanmu() {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },

  videoErrorCallback(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }
})