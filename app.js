//app.js
App({
  // 全局变量
   globalData: {
    userInfo: null,
    servsers: ""

  },

  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  fetch(url, data, callback) {
    wx.request({
      url,
      data: data,
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        callback(null, res.data);
      },
      fail(e) {
        callback(e);
      }
    })
  },
  // ajax函数POST
  fetch1(url, data, callback) {
    wx.request({
      url,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success(res) {
        callback(null, res.data);
      },
      fail(e) {
        callback(e);
      }
    })
  },

})
