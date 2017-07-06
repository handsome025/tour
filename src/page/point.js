angular.module('ued').directive('pagePoint', function (WebApi) {
    return {
        templateUrl: 'page/point.html',
        restrict: 'E',
        link: function (scope) {
            // ued.title('首页')
            var source = ued.query("source")
            scope.mask = "close"
            scope.scene = "close" //king farm organic milk brain1 brain2 brain3

            scope.goVr = function () {
                if(source == "line"){
                    ued.href("farmline1.html?source="+source)
                }else{
                    ued.href("farm1.html?source="+source)
                }
            }

            function showLoading () {
                loading = weui.loading('加载中...')
            }
            function hideLoading () {
                loading && loading.hide()
            }

        }
    }
})