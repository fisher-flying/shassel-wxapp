let md5 = require('../../utils/md5.js')

Page({
  data: {},
  getList: function (type) {
    let time = new Date().getTime()
    let signParams = {
      'timeStamp': time,
      'custStarLvl': 1
    }
    let sign = md5.getSign(signParams)
    console.log(sign)
    wx.cloud.callFunction({
      name:'newsDetail',
      data:{
        'sign': sign,
        'timeStamp': time,
        'custStarLvl': 1
      }
    }).then(res => {
      console.log(33,res)
    }).catch(err => {
      console.log(11,err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getList(options.id)
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})