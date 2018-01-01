const app = getApp();
Page({
  data: {
    imgUrls: [
      "http://img0.imgtn.bdimg.com/it/u=880477421,2302497799&fm=27&gp=0.jpg",
      "http://img5.imgtn.bdimg.com/it/u=1741138662,3408053349&fm=27&gp=0.jpg",
      "http://img4.imgtn.bdimg.com/it/u=2930540385,1562266871&fm=27&gp=0.jpg",
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  changeTo:(event)=>{
    console.log(event);
    let where = event.currentTarget.dataset.where;
    console.log(where);
    if(where === 'orderRood'){
      wx.switchTab({
        url: '/pages/${where}/${where}',
      })
    }else{
      wx.navigateTo({
        url: '/pages/class/${where}/${where}',
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载的时候从easymoc获取全局数据
    wx.request({
      url: 'http://www.easy-mock.com/mock/5a1ffb42583969285ab22bb7/orderOnline/orderOnline',
      complete: res => {
        console.log(res);
        app.globalData.classifyList = res.data;
        console.log(app.globalData.classifyList);
        this.setData({
          classifyList: app.globalData.classifyList.myTrump,
          newGoods: app.globalData.classifyList.newGoods,
          classicGoods: app.globalData.classifyList.classicGoods,
          components: app.globalData.classifyList.components,
          headLines: app.globalData.classifyList.headLines,
        });
      },
    });
  },
})