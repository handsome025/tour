/**
 * 处理 <a> 的 href 属性，让跳转不受 <base> 影响
 * 如果 href 为 空、#、javascript: 开头，点击会阻止
 *
 * 如果不需要处理 或者 遇到严重 BUG，删除本文件，使用 JS 跳转: ued.href() ued.replace()
 */
angular.module('ued').directive('a', function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            $(element).on('click', function (event) {
                var href = $.trim($(this).attr('href'))
                var target = $.trim($(this).attr('target'))
                if (href === '' || href === '#' || href.indexOf('javascript:') === 0) {
                    return false
                }
                href = ued.path(href)
                switch (target) {
                    case '_blank':
                        window.open(href)
                        break
                    case '_parent':
                        window.parent.open(href)
                        break
                    case '_top':
                        window.top.open(href)
                        break
                    default:
                        var iframe = $('iframe[name="' + target + '"]')
                        if (target !== '_self' && iframe.length) {
                            iframe.attr('src', href)
                        } else {
                            ued.href(href)
                        }
                }
                return false
            })
        }
    }
})