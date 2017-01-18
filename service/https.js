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
      //   m: 'TgIndex',
      //   a: 'TgIndex',
      //   r: 'dddddddfddddd',
      //   t: 'xxxc',
      //   v: '3.0.3',
      //   p: '2',
      // },
      data: {
        'm': 'TgIndex',
        'a': 'TgIndex__',
        'r': data_r,
        // 'r': 'dddddddfddddddddddddfddddd',
        't': 'xxxxc',
        'v': '3.0.3',
        'p': '2',
      },
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