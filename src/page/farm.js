angular.module('ued').directive('pageFarm', function (WebApi) {
    return {
        templateUrl: 'page/farm.html',
        restrict: 'E',
        link: function (scope) {
            // ued.title('首页')
            window.source = ued.query("source")
            orientation()//判断手机横竖屏状态
            scope.mask = "close"
            scope.scene = "close" //king farm organic milk brain1 brain2 brain3

            function orientation(){//判断手机横竖屏状态
                if (window.orientation === 180 || window.orientation === 0) { 
                    // alert('竖屏状态！');
                    ued.rem(400)
                } 
                if (window.orientation === 90 || window.orientation === -90 ){ 
                    // alert('横屏状态！');
                    ued.rem(1000)
                }  
            } 

            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
                orientation() 
                window.location.reload()
            }, false);

            function showLoading () {
                loading = weui.loading('加载中...')
            }
            function hideLoading () {
                loading && loading.hide()
            }

            $(".pano").on('click', function(event) {
                $(this).addClass('bounceOut')
            });

        }
    }
})