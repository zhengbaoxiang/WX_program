// 在自定义组件的 js 文件中，需要使用 Component() 来注册组件，并提供组件的属性定义、内部数据和自定义方法。
//组件的属性值和内部数据将被用于组件 wxml 的渲染，其中，属性值是可由组件外部传入的。更多细节参见 Component构造器 。
import Toast from 'tdesign-miniprogram/toast';
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    },
    tabbarValue: {
      type: String,
      value: 'bili',
    }
  },
  data: {
    tabbarList: [
      { value: 'bili', label: '首页', icon: 'home',path:'/pages/bili/index' },
      { value: 'classify', label: '分类', icon: 'app' ,path:'/pages/classify/classify'},
      { value: 'state', label: '动态', icon: 'system-code',path:'/pages/state/index' },
      { value: 'user', label: '我的', icon: 'user' ,path:'/pages/user/user'},
    ],
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){},
    onTabBarChange(e) {
      this.setData({
        tabbarValue: e.detail.value,
      });
      let cur = this.data.tabbarList.find((item)=>{
        return item.value === e.detail.value
      })
      console.log('cur',cur)
      // 页面栈限制：微信小程序规定，单个页面最多压入5层（包括首页），超过这个限制后，wx.navigateTo 将无法继续跳转。此时你需要使用 wx.redirectTo 替换部分页面跳转，或者合理规划你的页面结构和导航流程。
      // wx.navigateTo({url: cur.path})
      // wx.redirectTo({url: cur.path})

      
      wx.switchTab({url: cur.path})


      Toast({
        context: this,
        selector: '#t-toast',
        message: cur.label,
      });

 



      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    },
  },
})