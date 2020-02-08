var comment = {
    add:function (name,content,article_id) {
        return $.post(APILIST.comment_add,{
            'name':name, //游客名
            'content':content, //评论的内容
            'article_id':article_id //评论的文章编号
        })
    }
}