var WxAutoImage = require('../../js/wxAutoImageCal.js');
var app = getApp();

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
        itemArray: [
            {
                "itemUrl": '../../image/index/ppx.jpg',
                "itemText": '多肉植物-碰碰香'
            },
            {
                "itemUrl": '../../image/huaju.jpeg',
                "itemText": '11月20日话剧《原野》'
            },
            {
                "itemUrl": '../../image/huaju.jpeg',
                "itemText": '11月28日“夜店”演唱会'
            },
        ],
        likeArray: [
          {
            "itemUrl": '../../image/index/ppx.jpg',
            "itemText": '多肉植物-碰碰香',
            'address':'如皋',
            'amnt':'100',
            'linkUrl':'../spdetail/spdetail?id=1'
          }
        ]
    },
    cusImageLoad: function(e){
        var that = this;
        that.setData(WxAutoImage.wxAutoImageCal(e));
    }
})