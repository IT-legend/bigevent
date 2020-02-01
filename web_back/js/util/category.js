// 文章列表模块化
// 定义category，将所有与列表有关的方法都写在这个js文件中


var category = {
    // 1.获取文章列表接口
    get:function(){
        return $.get(APILIST.category_get)
    },
    // 2.添加
    add:function(name,slug){
        return $.post(APILIST.category_add,{'name':name,'slug':slug})
    },
    // 删除
    del:function(id){
        return $.post(APILIST.category_del,{
            'id':id
        })
    }
}