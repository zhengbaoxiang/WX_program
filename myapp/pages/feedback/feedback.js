// pages/feedback/feedback.js
const areaList = {
  provinces: {
    110000: '北京市',
    440000: '广东省',
  },
  cities: {
    110100: '北京市',
    440100: '广州市',
    440200: '韶关市',
    440300: '深圳市',
    440400: '珠海市',
    440500: '汕头市',
    440600: '佛山市',
  },
  counties: {
    110101: '东城区',
    110102: '西城区',
    110105: '朝阳区',
    110106: '丰台区',
    110107: '石景山区',
    110108: '海淀区',
    110109: '门头沟区',
    110111: '房山区',
    110112: '通州区',
    110113: '顺义区',
    110114: '昌平区',
    110115: '大兴区',
    110116: '怀柔区',
    110117: '平谷区',
    110118: '密云区',
    110119: '延庆区',
    440103: '荔湾区',
    440104: '越秀区',
    440105: '海珠区',
    440106: '天河区',
    440111: '白云区',
    440112: '黄埔区',
    440113: '番禺区',
    440114: '花都区',
    440115: '南沙区',
    440117: '从化区',
    440118: '增城区',
    440203: '武江区',
    440204: '浈江区',
    440205: '曲江区',
    440222: '始兴县',
    440224: '仁化县',
    440229: '翁源县',
    440232: '乳源瑶族自治县',
    440233: '新丰县',
    440281: '乐昌市',
    440282: '南雄市',
    440303: '罗湖区',
    440304: '福田区',
    440305: '南山区',
    440306: '宝安区',
    440307: '龙岗区',
    440308: '盐田区',
    440309: '龙华区',
    440310: '坪山区',
    440311: '光明区',
    440402: '香洲区',
    440403: '斗门区',
    440404: '金湾区',
    440507: '龙湖区',
    440511: '金平区',
    440512: '濠江区',
    440513: '潮阳区',
    440514: '潮南区',
    440515: '澄海区',
    440523: '南澳县',
    440604: '禅城区',
    440605: '南海区',
    440606: '顺德区',
    440607: '三水区',
    440608: '高明区',
  },
};
const getOptions = (obj, filter) => {
  const res = Object.keys(obj).map((key) => ({ value: key, label: obj[key] }));
  if (filter) {
    return res.filter(filter);
  }
  return res;
};

const match = (v1, v2, size) => v1.toString().slice(0, size) === v2.toString().slice(0, size);

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageForm: {
      phoneNumber: null
    },
    dateVisible: false,
    dateText: '',
    areaVisible: false,
    areaText: '',
    areaValue: [],
    provinces: getOptions(areaList.provinces),
    cities: [],
    counties: [],
  },
  /**
    * 生命周期函数--监听页面初次渲染完成
    */
  onReady() {
    const { provinces } = this.data;
    const { cities, counties } = this.getCities(provinces[0].value);
    this.setData({ cities, counties });
  },


  infoConfirm(e) {
    console.log(e.detail)
    console.log(this.data)
  },
  // 通过增加输入框的自定义属性，可以使用一个方法适配多个组件的change
  onInputChange(e) {
    const { key } = e.currentTarget.dataset;
    const { value } = e.detail;
    const propertyName = 'pageForm.' + key
    this.setData({
      [propertyName]: value
    })
  },
  radioChange(e) {
    this.setData({
      'pageForm.radio': e.detail.value
    })
  },
  checkboxChange(e) {
    const { value } = e.detail;
    this.setData({
      "pageForm.checkList": value
    })
  },


// 封装公共picker,通过data-key="area" 区分
  showPicker(e) {
    const { key } = e.currentTarget.dataset;
    this.setData({
      [`${key}Visible`]: true,
    });
  },
  hidePicker() {
    const { key } = e.currentTarget.dataset;
    this.setData({
      [`${key}Visible`]: false,
    });
  },
  // 返回值为字符串
  onPickerChangeText(e) {
    const { key } = e.currentTarget.dataset;
    const { value } = e.detail;
    this.setData({
      [`${key}Visible`]: false,
      [`${key}Text`]: value,
    });
  },
  // 返回值为数组
  onPickerChange(e) {
    const { key } = e.currentTarget.dataset;
    const { value } = e.detail;
    this.setData({
      [`${key}Visible`]: false,
      [`${key}Value`]: value,
      [`${key}Text`]: value.join(' '),
    });
  },


  // 省市县选择框联动
  onColumnChange(e) {
    console.log('pick:', e.detail);
    const { column, index } = e.detail;
    const { provinces, cities } = this.data;
    if (column === 0) {
      // 更改省份
      const { cities, counties } = this.getCities(provinces[index].value);
      this.setData({ cities, counties });
    }
    if (column === 1) {
      // 更改城市
      const counties = this.getCounties(cities[index].value);
      this.setData({ counties });
    }
    if (column === 2) {
      // 更改区县
    }
  },
  getCities(provinceValue) {
    const cities = getOptions(areaList.cities, (city) => match(city.value, provinceValue, 2));
    const counties = this.getCounties(cities[0].value);
    return { cities, counties };
  },
  getCounties(cityValue) {
    return getOptions(areaList.counties, (county) => match(county.value, cityValue, 4));
  },

  // 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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