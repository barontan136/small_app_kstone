
var Crypto = require('../pages/cryptojs/cryptojs.js').Crypto;

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function Encrypt (word){
    var mode = new Crypto.mode.CBC(Crypto.pad.pkcs7);
    var eb = Crypto.charenc.UTF8.stringToBytes(word);
    var kb = Crypto.charenc.UTF8.stringToBytes("OE23SW6@");//KEY
    var vb = Crypto.charenc.UTF8.stringToBytes("OE23SW6@");//IV
    var ub = Crypto.DES.encrypt(eb,kb,{iv:vb,mode:mode,asBpytes:true});
    return ub;
	}
  function Decrypt (word){
    var mode = new Crypto.mode.CBC(Crypto.pad.pkcs7);
    var eb = Crypto.util.base64ToBytes(word);
   var kb = Crypto.charenc.UTF8.stringToBytes("OE23SW6@");//KEY
    var vb = Crypto.charenc.UTF8.stringToBytes("OE23SW6@");//IV
    var ub = Crypto.DES.decrypt(eb,kb,{asBpytes:true,mode:mode,iv:vb});
    return ub;
}

module.exports = {
  formatTime: formatTime,
  Encrypt:Encrypt,
  Decrypt:Decrypt
}
