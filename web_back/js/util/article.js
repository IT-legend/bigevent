// 业务逻辑层，只有js代码，没有html代码
// 不涉及任何页面方面的东西，没有dom操作


// 文章列表功能模块化

// 定义article，将所有与列表有关的方法都写在这个js文件中


var article = {
    // 1.获取文章列表接口
    // page代表当前要取出第几页的数据
    // type当前文章类型编号
    // status当前文章状态
    get:function(page,type,status){
        return $.get(APILIST.article_get,{'page':page,'type':type,'state':status})
    },
    // 2.添加文章类别分类
    // add:function(name,slug){
    //     return $.post(APILIST.category_add,{'name':name,'slug':slug})
    // },
    // // 3.删除文章类别分类
    // del:function(id){
    //     return $.post(APILIST.category_del,{
    //         'id':id
    //     })
    // },
    // // 4.编辑文章类别分类
    // edit:function(id,name,slug){
    //     return $.post(APILIST.category_edit,{
    //         'id':id,
    //         'name':name,
    //         'slug':slug
    //     })
    // },

}