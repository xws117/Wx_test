//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    username :'123\n',
    userInfo: {},
    xxxx:{},
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    markers:[{
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
    }]
    
  },
  onload(){

  },
  marktapControl (e){
    console.log(e)
    this.setData({
        xxxx:e.markerId
    })

  }

})
