// 用户模块

//定义一个user对象，用来存放方法函数
//模块化的开发
// 把所有与用户有关的方法写在一个对象中，并且放入一个js文件中


var user = {
    // 一、用户登录
    login: function (name, psd) {
        // $.post(url,数据).then(回调函数)
        //！！！这里通过return将$post获取到的数据
        return $.post(APILIST.user_login, {
            'user_name': name,
            'password': psd
        })
    },
    // 二、用户退出
    logout: function () {
        return $.post(APILIST.user_logout)
    },
    // 三、获取用户信息
    getUser: function () {
        return $.get(APILIST.user_getUser)
    }
}
