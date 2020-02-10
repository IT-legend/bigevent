// 游客的配置文件
// 把这个项目中所有用到的接口地址全部存在这里

//所有接口的基地址
// 1.自己的地址
// var BASEURL = 'http://192.168.5.5:8000' 
// 2.如果当前服务就就是在自己的电脑上，就可以直接写成localhost
const BASEURL = 'http://localhost:8000' 
// 3.老师买的地址，只有在老师运行后端时可用
// var BASEURL = 'http://39.99.130.17:8000' 

// 用来保存所有的接口信息
const APILIST = {
    // 1.获取文章类别分类
    category_get: BASEURL + '/category',
    // 2.获取焦点图
    article_get: BASEURL + '/search',
    // 3.获取一周热门排行列表
    article_rank: BASEURL + '/rank',
    // 4.最新资讯模块
    article_last: BASEURL + '/lastest',
    // 5.获取文章详情
    article_detail: BASEURL + '/article',
    // 6.添加评论
    comment_add:BASEURL + '/post_comment',
    // 7.获取评论列表
    comment_get:BASEURL + '/get_comments',


   
    

    
}