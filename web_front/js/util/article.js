// 业务逻辑层，只有js代码，没有html代码
// 不涉及任何页面方面的东西，没有dom操作

// 定义article，将所有与列表有关的方法都写在这个js文件中
// 以下为游客端功能

var article = {
    // 1.获取主页中5条焦点图新闻
    getFouceFive:function(){
        // 因为只要5条数据，直接设置只获取5条即可
        return $.get(APILIST.article_get,{'perpage':5})
    },
    getRank:function(type){
        return $.get(APILIST.article_rank,{'type':type})
    },
    

}