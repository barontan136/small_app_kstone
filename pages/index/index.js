//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello Small Application',
    reqdata: '',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this

    app.func.req('/app/v0200/tg_index.php',{},function(res){  
     //更新数据
      that.setData({
        reqdata:res
      })  
    })

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
