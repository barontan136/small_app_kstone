//index.js
//获取应用实例
var utils = require('../../utils/util');
var app = getApp();
var encStr;
Page({
  data: {
    motto: 'Hello Small Application',
    reqdata: {},
    userInfo: {}
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //点击加密
  click1:function(e){
    encStr = utils.Encrypt("Tom");
    console.log("加密后的结果为===",encStr);
  },
  //点击解密
  clickupdate:function(e){
    //var str = utils.Decrypt(encStr);
    var str = utils.Decrypt('ZhKZFxlxTbU=');
    console.log("解密后的信息为为==",str);
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this;

var str = utils.Decrypt("ButM/i7pufEcCQGFa+97RgdNGOUu6asmrEvRzZ6hcfw=");
var str = utils.Decrypt("QtGhUI7Ufkrbj7oqxym2PxCKN155UZP+nu8ZF8qLy5Q=");

    var datatemp = "{\"device_id\":\"868013023411808\"}";
    // datatemp = JSON.parse(datatemp);
    var dataencrpy = utils.Encrypt(datatemp);
    app.func.req_kstone('',dataencrpy,function(res){  
     var str = utils.Decrypt(res);
    console.log("解密后的信息为为==",str);
     //更新数据
      that.setData({
        reqdata:str
      })  
    }),

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
