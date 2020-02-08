var comment = {
    // 1.添加文章评论
    add:function (name,content,article_id) {
        return $.post(APILIST.comment_add,{
            'name':name, //游客名
            'content':content, //评论的内容
            'article_id':article_id //评论的文章编号
        })
    },
    // 2.获取文章的评论
    get:function (id) {
        return $.get(APILIST.comment_get,{
            'article_id':id //评论的编号
        })
    }
}