// 配置文件
// 把这个项目中所有用到的接口地址全部存在这里

//所有接口的基地址
// var BASEURL = 'http://192.168.5.4:8000'
var BASEURL = 'http://192.168.5.4:8000' 

// 用来保存所有的接口信息
var APILIST = {
    // 一、用户模块
    user_login: BASEURL + '/admin/login',
    user_logout: BASEURL + '/admin/logout',
    user_getUser: BASEURL + '/admin/getuser',

    // 二、文章类别管理模块
    // 1.获取文章类别分类
    category_get: BASEURL + '/admin/category_search',
    // 2.添加文章类别分类
    category_add: BASEURL + '/admin/category_add',
    // 3.删除文章类别分类
    category_del: BASEURL + '/admin/category_delete',
    // 4.编辑文章类别分类
    category_edit: BASEURL + '/admin/category_edit',

    // 三、文章列表模块
    // 1.文章搜索
    article_get: BASEURL + '/admin/search',
    // 2.文章删除
    article_del: BASEURL + '/admin/article_delete',
    // 3.添加文章
    article_add: BASEURL + '/admin/article_publish',


    
}