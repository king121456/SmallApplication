// Pages/post/post.js
Page({
  data: {},
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var postData = [
      {
        postUser: "/Images/alien.png",
        postDate: "2017-4-5",
        postContent: "/Images/post/bl.png",
        postTitle: "待到山花烂漫时，她在丛中笑",
        postPaneImage:"/Images/icon/star.png",
        postPaneImage2:"/Images/icon/collection-anti.png"
      },{
        postUser: "/Images/alien.png",
        postDate: "2017-4-5",
        postContent: "/Images/post/bl.png",
        postTitle: "待到山花烂漫时，她在丛中笑",
        postPaneImage:"/Images/icon/star.png",
        postPaneImage2:"/Images/icon/collection-anti.png"
      },
      {
        postUser: "/Images/alien.png",
        postDate: "2017-4-5",
        postContent: "/Images/post/bl.png",
        postTitle: "待到山花烂漫时，她在丛中笑",
        postPaneImage:"/Images/icon/star.png",
        postPaneImage2:"/Images/icon/collection-anti.png"
      },
      {
        postUser: "/Images/alien.png",
        postDate: "2017-4-5",
        postContent: "/Images/post/bl.png",
        postTitle: "待到山花烂漫时，她在丛中笑",
        postPaneImage:"/Images/icon/star.png",
        postPaneImage2:"/Images/icon/collection-anti.png"
      },
      {
        postUser: "/Images/alien.png",
        postDate: "2017-4-5",
        postContent: "/Images/post/bl.png",
        postTitle: "待到山花烂漫时，她在丛中笑",
        postPaneImage:"/Images/icon/star.png",
        postPaneImage2:"/Images/icon/collection-anti.png"
      }
    ];
    this.setData({ postData: postData });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})