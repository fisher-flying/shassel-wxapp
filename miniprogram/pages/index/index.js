Page({
  data: {},

  onLoad: function() {},
  
  goList: function(event) {
    wx.navigateTo({
      url: `../serList/serList?id=${event.target.dataset.id}`,
    })
  }

})
