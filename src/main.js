var weixinUserInfo = ued.cookie.getObject('Weixin_userInfo')
if (!ued.isLocal() && ued.isEmpty(weixinUserInfo)) {
    window.location.replace('https://wx.abbottmama.com.cn/wechat/auth?redirect=' + encodeURIComponent(window.location.origin + '/eleva/index/weixinauthorize?callbackUrl=' + encodeURIComponent(window.location.href)));
    return;
}

/*
 |--------------------------------------------------------------------------
 | 设置本地模拟接口的目录
 |--------------------------------------------------------------------------
 | 如果不需要模拟 则删除此行
 |
 |
 */

ued.ajax.mock('mock')

/*
 |--------------------------------------------------------------------------
 | 解决移动端 click 300ms 延迟
 |--------------------------------------------------------------------------
 | 如果页面比较特殊会出现 BUG 则删除此行
 |
 |
 */

ued.fastclick()

/*
 |--------------------------------------------------------------------------
 | 微信 JSSDK 配置
 |--------------------------------------------------------------------------
 | 上线后，如果是 umaman.com 结尾的域名，这里不用改动
 | 如果是外部接口或者有特殊需求，请查看文档 /frontend/public/ued.js/doc/api.html
 |
 */

ued.weixin.uma()

/*
 |--------------------------------------------------------------------------
 | 隐藏微信右上角分享按钮
 |--------------------------------------------------------------------------
 | 如果不需要隐藏，则删除此行
 | 如果想刚开始隐藏，等待 JSSDK 加载成功后才显示，也可以保留这行代码，不用删
 |
 */

// wx.ready(function () {
//     wx.hideOptionMenu()
// })

ued.baidu.track('faa9af50f4411764212621b24614ad42')
 
/*
 |--------------------------------------------------------------------------
 | 设置微信分享
 |--------------------------------------------------------------------------
 | 会在 config 成功后自动触发
 | 可以多次设置，会覆盖前面的设置
 |
 */
var channel = ""
var source = ued.query("source")
if(source == "other" || source == "line"){
    channel = "（"+source+"）"
}
var link = window.location.origin + '/html/campaign/index.html'
if(ued.query("source") == "other"){
    link = window.location.origin + '/html/campaign/index.html?source=other'
}
ued.weixin.share({
    title: '天啦噜 原来有机世界是这样的 你还不快来看看？更有黑科技大礼等着你',
    desc: '天啦噜 原来有机世界是这样的 你还不快来看看？更有黑科技大礼等着你',
    link: link,
    imgUrl: window.location.origin+"/html/campaign/static/share.jpg",
    success: share //分享成功
})
function share() {
    ued.baidu.trackEvent('微信分享'+channel)
}
/*
 |--------------------------------------------------------------------------
 | 百度统计
 |--------------------------------------------------------------------------
 | ued.baidu.track('百度统计代码问号后面那一串内容')，多个可以用数组
 |
 |
 */

// ued.baidu.track('???')

/*
 |--------------------------------------------------------------------------
 | ICC 统计
 |--------------------------------------------------------------------------
 | ued.track('填 openid')
 | 如果这个时候还拿不到openid 就在拿到之后再调用一次 ued.track
 |
 */

// ued.track('???')
ued.trackPage()

/*
 |--------------------------------------------------------------------------
 | 定义 angular 模块
 |--------------------------------------------------------------------------
 | run 里可以注入 service 执行一些初始化逻辑
 | 如果不涉及 service 的调用，可以直接写在 run 外面
 |
 */

angular.module('ued', []).run(function () {

})

ued.title('雅培菁智')
/*
 |--------------------------------------------------------------------------
 | 加载主题
 |--------------------------------------------------------------------------
 | 主题名：通常是从接口获取、或者从 cookie 获取
 | 是否插入模式：如果是从异步接口获取的数据再加载主题，需要设置为 true
 |
 */

loadTheme('default')

function loadTheme (theme, append) {
    if (theme && theme != 'default') {
        var version = $('html').data('version')
        var css = 'dist/theme-' + theme + '.css?' + version
        var js = 'dist/theme-' + theme + '.js?' + version
        if (append) {
            Promise.all([ued.loadStyle(css), ued.loadScript(js)]).then(bootstrap)
            return
        }
        document.write('<link rel="stylesheet" href="' + css + '">')
        document.write('<script src="' + js + '"></script>')
    }
    bootstrap()
}

function bootstrap () {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['ued'])
    })
}