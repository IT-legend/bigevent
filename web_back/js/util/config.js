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

    // 二、文章列表模块
    // 获取文章分类
    category_get: BASEURL + '/admin/category_search',
    // 添加文章分类
    category_add: BASEURL + '/admin/category_add',
    // 删除文章分类
    category_del: BASEURL + '/admin/category_delete',
    // 编辑文章分类
    category_edit: BASEURL + '/admin/category_edit',


    
}