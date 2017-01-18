//var rootDocment = 'https://cssrv.51kingstone.com';//你的域名
var rootDocment = 'https://tg.51kingstone.com';
function req(url,data,cb){
    wx.request({
      url: rootDocment + url,
      data: data,
      method: 'post',
      header: {'Content-Type': 'application/json'},
      success: function(res){
        return typeof cb == "function" && cb(res.data)
      },
      fail: function(){
        return typeof cb == "function" && cb(false)
      }
    })
}

function req_kstone(url,data_r,cb){
  wx.request({
      url: rootDocment + url,
      // data: {
      //   'm': 'TgIndex',
      //   'a': 'TgIndex',
      //   'r': data_r,
      //   't': 'xxxxc',
      //   'v': '3.0.3',
      //   'p': '2',
      // },      
      data: {
        'm': 'Coffers',
        'a': 'coffersIndex',
        'r': 'fBvxXbTSSZv6NxTXvST0O0mbxdEx6BjCMOQzzACJL/MsF0Y1EpZjVGX5mvrswDNT6r495/o4ZJbUMNYZ1JClIZBIYpFdO8xxjqeoYMhYcBU+l6dSevIUJ66NNvqoZQw0DghIwRNF3M/RRwRbxANoZq2lM4L2VnoU',
        't': 'T170118215729587f7449c8d90',
        'v': '3.0.2',
        'p': '1',
      },
      // data: {
      //   'm': 'DepositDeal',
      //   'a': 'getGoldPrice',
      //   'r': data_r,
      //   't': 'T170118215729587f7449c8d90',
      //   'v': '3.0.2',
      //   'p': '1',
      // },
      method: 'post',
      header: {
        //'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
        },
      success: function(res){
        return typeof cb == "function" && cb(res.data)
      },
      fail: function(){
        return typeof cb == "function" && cb(false)
      }
    })
}

//OE23SW6@
//function 


module.exports = {
  req: req,
  req_kstone:req_kstone
}