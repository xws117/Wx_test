//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    username :'123\n',
    userInfo: {},
    xxxx:0,
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
   /*markers:[{
      id:"0",
      latitude:"39.9259240516",
      longitude:"116.4530430606",
      iconPath:"/pic/location.png"
    },{
      id:"1",
      latitude:"39.9259240516",
      longitude:"116.4608250000",
      iconPath:"/pic/location.png"
    },{
      id:"2",
      latitude:"39.9259240516",
      longitude:"116.4730430606",
      iconPath:"/pic/location.png"
    },{
      id:"3",
      latitude:"39.9159240516",
      longitude:"116.4730430606",
      iconPath:"/pic/location.png"
    }]*/
    markers:[]
    
  },
  onLoad: function(options) {
    this.setData({
      xxxx:5
    })
    
  },
  onReady: function(options) {
    //console.log(markers)
    var marker = new Array()
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res){
        console.log(res)
        var ll = res.longitude
        var la = res.latitude
        var a = {id:0,latitude:la+0.1,longitude:ll,iconPath:"/pic/location.png"}
        marker[0]=a
        var a = {id:1,latitude:la-0.1,longitude:ll,iconPath:"/pic/location.png"}
        marker[1]=a
        var a = {id:2,latitude:la,longitude:ll+0.1,iconPath:"/pic/location.png"}
        marker[2]=a
        var a = {id:3,latitude:la,longitude:ll-0.1,iconPath:"/pic/location.png"}
        marker[3]=a
        
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
    this.setData({
      markers:marker
    })
    
  },
  marktapControl (e){
    console.log(e)
    this.setData({
        xxxx:e.markerId
    })

  }

})
