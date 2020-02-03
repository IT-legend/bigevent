// 业务逻辑层，只有js代码，没有html代码
// 不涉及任何页面方面的东西，没有dom操作


// 文章列表模块化

// 定义category，将所有与列表有关的方法都写在这个js文件中


var category = {
    // 1.获取文章列表接口
    get:function(){
        return $.get(APILIST.category_get)
    },
    // 2.添加文章分类
    add:function(name,slug){
        return $.post(APILIST.category_add,{'name':name,'slug':slug})
    },
    // 3.删除文章分类
    del:function(id){
        return $.post(APILIST.category_del,{
            'id':id
        })
    },
    // 4.编辑文章分类
    edit:function(id,name,slug){
        return $.post(APILIST.category_edit,{
            'id':id,
            'name':name,
            'slug':slug
        })
    },

}