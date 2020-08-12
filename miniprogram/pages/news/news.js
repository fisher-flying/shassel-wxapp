Page({
  data: {},
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    wx.cloud.callFunction({
      name:'newsList'
    }).then(res => {
      wx.hideLoading()
      console.log('new+post.默认get',res)
    }).catch(err=>{
      wx.hideLoading()
      console.log(err)
    })
  },
  goMore: function(event) {
    //type=0:家族故事，1：近期动态
    wx.navigateTo({
      url: `../newsList/newsList?id=${event.target.dataset.type}`,
    })
  },
  goDetail: function(event) {
    wx.navigateTo({
      url: `../newsDetail/newsDetail?id=${event.currentTarget.dataset.id}`,
    })
  }

})