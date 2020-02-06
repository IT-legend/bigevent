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
    // 4.根据id去获取文章的详情
    getById:function(id){
        return $.get(APILIST.article_get,{'id':id})
    },
    // 2.删除文章
    del:function(id){
        return $.get(APILIST.article_del,{
            'id':id
        })
    },
    //3.添加文章
    add:function(fd){
        return $.ajax({
            url: APILIST.article_add,
            type: 'post',
            data: fd,
            processData:false, //不允许处理数据
            contentType:false, //不设置请求头
        })
    },
    // 5.保存文章编辑 formDate对象
    edit:function(fd){
        return $.ajax({
            url: APILIST.article_edit,
            type: 'post',
            data: fd,
            processData:false, //不允许处理数据
            contentType:false, //不设置请求头
        })
    }

}