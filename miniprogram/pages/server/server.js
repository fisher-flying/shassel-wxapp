const db = wx.cloud.database()

// 服务流程
const flow = [
  "签署家办服务协议",
  "协商制定服务框架初稿",
  "信托机构引入，尽职调查",
  "确定信托框架文件",
  "委托资产交付、信托成立",
  "投资、资产管理",
  "收益分配；事务管理",
  "信托存续中止"
]

Page({
  data: {
    qaIndex:0,
    qaList:[],
    flowList: flow,
    demo:'秀实<br/>家办&nbsp;示例'
  },
  foldPan: function(event){
    this.data.qaIndex == event.currentTarget.dataset.id
    ? this.setData({
        qaIndex: 0
      })
    : this.setData({
      qaIndex: event.currentTarget.dataset.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('listQA').where({}).get().then(res => {
      this.setData({
        qaList: res.data
      })
    }).catch(err => {
      console.log(err)
    })
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