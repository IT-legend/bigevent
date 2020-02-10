const comment = {
    // 1.添加文章评论
    // name游客名
    // content评论的内容
    // article_id评论的文章编号
    add:(name,content,article_id) => $.post(APILIST.comment_add,{name,content,article_id}),
    // 2.获取文章的评论
    get:article_id => $.get(APILIST.comment_get,{article_id})
}