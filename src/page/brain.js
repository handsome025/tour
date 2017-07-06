angular.module('ued').directive('pageBrain', function (WebApi) {
    return {
        templateUrl: 'page/brain.html',
        restrict: 'E',
        link: function (scope) {
            // ued.title('首页')
            window.source = ued.query("source")
            scope.scene = "close" //king farm organic milk brain1 brain2 brain3
            orientation()//判断手机横竖屏状态
            function orientation(){//判断手机横竖屏状态
                if (window.orientation === 180 || window.orientation === 0) { 
                    // alert('竖屏状态！');
                    ued.rem(400)
                    scope.scene = "king_finish1"
                    setTimeout(function(){
                        scope.scene = "close"
                        $(".king_finish1").addClass("fadeOut").addClass('none')
                        scope.$apply()
                    },6000)
                    // $(".finish_king").addClass('transform90')
                } 
                if (window.orientation === 90 || window.orientation === -90 ){ 
                    // alert('横屏状态！');
                    scope.scene = "king_finish"
                    
                    setTimeout(function(){
                        scope.scene = "close"
                        $(".king_finish").addClass("fadeOut").addClass('none')
                        scope.$apply()
                    },6000)
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