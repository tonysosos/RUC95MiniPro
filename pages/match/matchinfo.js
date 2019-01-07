// pages/match/matchinfo.js
var sliderWidth = 96;
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    jersey: {1: '红色', 2:'蓝色'},
    matchinfo: {},
    matchid: 1,
    tabs: ["已报名", "已请假"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    signedupList: [
      {name: "老大", icon: "123"}, 
      {name: "老二", icon:"456"},
      { name: "老二", icon: "456" },
      { name: "老二", icon: "456" },
      { name: "老二", icon: "456" },
      { name: "老二", icon: "456" },
      { name: "老二", icon: "456" },
      { name: "老二", icon: "456" },
      { name: "老二", icon: "456" },
      ],
    awayedList: [{ name: "老大", icon: "123" }, { name: "老二", icon: "456" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  signUp: function() {

  },

  askLeave:function() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("onShow")
    var that = this
    app.requestApiHost('api/match/' + this.data.matchid, '', 'GET',
      function (res) {
        that.setData({ matchinfo: res })
        console.log("res", res)
        console.log("matchinfo", that.data.matchinfo)
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})