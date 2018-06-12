var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();
Page({
    data: {
       
        imgUrls: [
           
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iconArray: [
            {
                "iconUrl": '../../image/index/01.jpg',
                "iconText": '多肉植物'
            },
            {
              "iconUrl": '../../image/index/02.jpg',
                "iconText": '观花植物'
            },
            {
              "iconUrl": '../../image/index/03.jpg',
                "iconText": '观叶植物'
            },
            {
              "iconUrl": '../../image/index/04.jpg',
                "iconText": '草本植物'
            },
            {
              "iconUrl": '../../image/index/05.jpg',
              "iconText": '木本植物'
            },
            {
              "iconUrl": '../../image/index/06.jpg',
              "iconText": '水生植物'
            },
            {
              "iconUrl": '../../image/index/07.jpg',
              "iconText": '室内植物'
            },
            {
              "iconUrl": '../../image/index/08.jpg',
              "iconText": '水培植物'
            }
        ],
        
        likeArray: []
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    },
    onLoad: function (options) {
      var that = this;
      //初始化 猜你喜欢  
      wx.request({
        url: "http://op.juhe.cn/onebox/exchange/currency?key=我的appkey&from=CNY&to=" + 'USD',
        // data: null,
        header: {
           "Content-Type":"application/json"
        },
        success: function (res) {
          
          console.log(res);
          that.setData({
            likeArray: [
              {
                "itemUrl": '../../image/index/ppx.jpg',
                "itemText": '多肉植物-碰碰香',
                'address': '如皋',
                'amnt': '100',
                'linkUrl': '../spdetail/spdetail?id=1'
              },
              {
                "itemUrl": '../../image/index/ppx.jpg',
                "itemText": '多肉植物-碰碰香',
                'address': '如皋',
                'amnt': '100',
                'linkUrl': '../spdetail/spdetail?id=2'
              }
            ]
          })
        },
        fail: function (err) {
          console.log(err)
        }
       
      })

      wx.request({
        url: "http://op.juhe.cn/onebox/exchange/currency?key=我的appkey&from=CNY&to=" + 'USD',
        header: {
          "Content-Type": "application/json"
        },
        success: function (res) {

          console.log(res);
          that.setData({
            imgUrls: [
              '../../image/swiper1.jpg',
              '../../image/index/ppx.jpg',
              '../../image/swiper1.jpg'
            ]
          })
        },
        fail: function (err) {
          console.log(err)
        }

      })


     
    }  
})