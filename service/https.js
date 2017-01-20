var rootDocment = 'https://cssrv.51kingstone.com:444';//你的域名
//var rootDocment = 'https://tg.51kingstone.com';
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
        'm': 'DepositDeal',
        'a': 'getGoldPrice',
        'r': 'ButM/i7pufEcCQGFa+97RjvOlGGprbRv0yhZlfmmKcI=\n',
        't': 'T1701191500275880640b6f777',
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