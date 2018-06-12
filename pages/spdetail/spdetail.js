var WxAutoImage = require('../../js/detailImage.js');
var util = require('../../utils/util.js');
var app = getApp();
var product_id= 0;
var is_select = false;
Page({

    data: {
        imgUrls: [
            '../../image/swiper1.jpg',
            '../../image/swiper1.jpg',
            '../../image/swiper1.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,
        iscollect: is_select,
        
        productArray: [
          {
            "itemUrl": '../../image/index/ppx.jpg',
            "itemText": '多肉植物-碰碰香',
            'address': '如皋',
            'amnt': '200',
            'dz_amnt':'100',
            'item_sm_Text': ' *本产品由 xx品牌商 提供发货服务。'
          }
        ]
    },
    onLoad: function (option) {
      console.log(option.id);
      product_id = option.id;
      this.setData({
        iscollect: wx.getStorageSync('product_id_' + product_id)
      })
    },
    collect: function(e){
        this.setData({
            iscollect: !this.data.iscollect
        })
        console.log(this.data.iscollect);
        if (this.data.iscollect){
          util.add_sc_array(product_id);
        }else{
          util.delete_sc_array(product_id);
        }
       
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    }
})