//定义一个user对象，用来存放方法函数
//模块化的开发
// 把所有与用户有关的方法写在一个对象中，并且放入一个js文件中
var user = {
    // 一、用户登录
    login: function (name, psd) {
        // $.post(url,数据).then(回调函数)
        $.post(APILIST.user_login, {
            'user_name': name,
            'password': psd
        }).then(function (res) {
            // console.log(res);
            if (res.code === 200) {
                // alert('登陆成功')
                window.location.href = './index.html'
            }
            else {
                alert(res.msg)
            }

        })
    },
    // 二、用户退出
    logout: function () {
        $.post(APILIST.user_logout).then(function (res) {
            // console.log(res);
            if (res.code === 200) {
                alert('安全退出成功')
                window.location.href = './login.html'
            }
            else {
                alert(res.msg)
            }

        })
    },
    // 三、获取用户信息
    getUser: function () {
        $.get(APILIST.user_getUser)
            .then(function (res) {
                // console.log(res);
                if (res.code === 200) {
                    $('#userName').text(res.data.nickname)
                    $('.userImg').attr('src', res.data.user_pic)
                }
            }
            )
    }

}
