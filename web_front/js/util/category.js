// 业务逻辑层，只有js代码，没有html代码
// 不涉及任何页面方面的东西，没有dom操作


// 文章类别管理模块化

// 定义category，将所有与列表有关的方法都写在这个js文件中


const category = {
    // 1.获取文章类别管理接口
    get:() => $.get(APILIST.category_get),
    // 2.添加文章类别分类
    add:(name,slug) => $.post(APILIST.category_add,{name,slug}),
    // 3.删除文章类别分类
    del:id => $.post(APILIST.category_del,{id}),
    // 4.编辑文章类别分类
    edit:(id,name,slug) => $.post(APILIST.category_edit,{id,name,slug}),

}