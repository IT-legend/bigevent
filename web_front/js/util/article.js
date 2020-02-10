// 业务逻辑层，只有js代码，没有html代码
// 不涉及任何页面方面的东西，没有dom操作

// 定义article，将所有与列表有关的方法都写在这个js文件中
// 以下为游客端功能

const article = {
    // 1.获取主页中5条焦点图新闻
    // 因为只要5条数据，直接设置只获取5条即可
    getFouceFive:() => $.get(APILIST.article_get,{'perpage':5}),
    // 2.获取一周热门排行 type文章类别编号，主页不需要，列表页需要
    getRank:type => $.get(APILIST.article_rank,{type}),
    // 3.获取最新资讯
    getLastest:() => $.get(APILIST.article_last),
    // 4.在列表页中，获取文章列表数据
    // type：文章类型编号
    // page：当前第几页
    getList:(type,page) => $.get(APILIST.article_get,{type,page}),
    // 5.获取文章详情
    getDetail:id => $.get(APILIST.article_detail,{id}),

}