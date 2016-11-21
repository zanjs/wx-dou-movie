'use strict';

// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    size: 20,
    subtitle: '请在此输入搜索内容',
    movies: [],
    search: '',
    loading: false,
    hasMore: false
  },

  handleLoadMore () {
    if (!this.data.hasMore) return;

    this.setData({subtitle: '加载中...', loading: true});

    app.douban.find('search', this.data.page++, this.data.size, {q: this.data.search})
        .then(d => {
          if (d.subjects.length) {
            this.setData({
              subtitle: d.title,
              movies: this.data.movies.concat(d.subjects),
              loading: false
            });
          } else {
            this.setData({
              hasMore: false,
              loading: false
            });
          }
        })
        .catch(e => {
          this.setData({subtitle: '获取数据异常', loading: false});
          console.error(e);
        })
  },

  handleSearch (e) {
    if (!e.detail.value) return;
    this.setData({
      subtitle: '加载中...',
      hasMore: true,
      loading: true,
      search: e.detail.value
    });
    this.handleLoadMore()
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    // TODO: onLoad
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    // TODO: onReady
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    // TODO: onShow
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {
    // TODO: onHide
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    // TODO: onUnload
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefreash: function onPullDownRefreash() {
    // TODO: onPullDownRefreash
  }
});
//# sourceMappingURL=search.js.map
