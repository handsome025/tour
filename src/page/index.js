angular.module('ued').directive('pageIndex', function (WebApi) {
    return {
        templateUrl: 'page/index.html',
        restrict: 'E',
        link: function (scope) {
            // ued.title('雅培菁智')
            ued.rem(640)
            var loading
            scope.step = 1
            scope.is_tour = false
            var exportRoot
            var num = 0
            var show_start = false

            var source = ued.query("source")
            var channel = ""
            if(source == "other" || source == "line"){
                channel = "（"+source+"）"
            }
            step1()

            function step1(){
                CreatejsLoader.load({
                    selector: '#step1', // 元素选择器或者元素对象
                    name: 'canvas', // 导出的文件名
                    path: 'static/flash/new', // 存放导出文件的目录
                    spritesheetLength: 90, // 导出的雪碧图数量,
                    spritesheetName: 'canvas_atlas_', //导出的雪碧图名称
                    onProgress: function (value) {
                        // console.log('加载 ' + ~~(value * 100) + '%')
                        $(".percent").text(parseInt((value*100))+'%')
                        $(".bar_du").css("width",4.63*(value)+"rem")
                        $(".flower").css("left",4.3*(value)+"rem")
                        if(parseInt((value*100)) == 100){
                            $(".wrap1").addClass('none')
                            scope.step = 2
                            scope.$apply()
                        }
                    },
                    onComplete: function (obj) {
                        console.log(obj) // 会回调stage, exportRoot等对象 用于后续操作
                        // exportRoot = obj.exportRoot;
                        stage = obj.stage
                        step2()

                        setTimeout(function(){
                            scope.show_start = true
                            scope.$apply()
                        },2000)
                    }
                })
            }
            //  function step1(){
            //     CreatejsLoader.load({
            //         selector: '#step1', // 元素选择器或者元素对象
            //         name: 'step1', // 导出的文件名
            //         path: 'static/flash/step1', // 存放导出文件的目录
            //         spritesheetLength: 0, // 导出的雪碧图数量,
            //         spritesheetName: 'step1_atlas_', //导出的雪碧图名称
            //         onProgress: function (value) {
            //             // console.log('加载 ' + ~~(value * 100) + '%')
            //             $(".percent").text(parseInt((value*100))+'%')
            //             $(".bar_du").css("width",4.63*(value)+"rem")
            //             $(".flower").css("left",4.3*(value)+"rem")
            //             if(parseInt((value*100)) == 100){
            //                 $(".wrap1").addClass('fadeOut')
            //                 scope.step = 2
            //                 scope.$apply()
            //             }
            //         },
            //         onComplete: function (obj) {
            //             console.log(obj) // 会回调stage, exportRoot等对象 用于后续操作
            //             exportRoot = obj.exportRoot;
            //             stage = obj.stage
            //             step2()
            //         }
            //     })
            // }
            // step2()
            function step2(){
                CreatejsLoader.load({
                    selector: '#step2', // 元素选择器或者元素对象
                    name: 'step2', // 导出的文件名
                    path: 'static/flash/step2', // 存放导出文件的目录
                    spritesheetLength: 0, // 导出的雪碧图数量,
                    spritesheetName: 'step2_atlas_', //导出的雪碧图名称
                    onProgress: function (value) {
                        console.log('加载 ' + ~~(value * 100) + '%')
                    },
                    onComplete: function (obj) {
                        exportRoot = obj.exportRoot;
                        console.log(obj) // 会回调stage, exportRoot等对象 用于后续操作
                        /*if(scope.is_tour){
                            ued.href("point.html?source="+ued.query("source"))
                        }*/
                        scope.start = function (){
                            ued.baidu.trackEvent('点击放大镜'+channel)
                            scope.is_tour = true
                            exportRoot.instance.gotoAndPlay(1)
                            // $(".step1").hide()
                            // $(".step2").show()
                            // step2()
                            // setTimeout(function(){
                            //     step2()
                            //     // $(".step1").hide()
                            //     // $(".step2").show()
                            //     scope.is_tour = true
                            //     scope.$apply()
                            // },1300)
                        }
                    }
                })
            }
            window.fun1 = function(){
                console.info(111111)
                ued.href("point.html?source="+ued.query("source"))
                ued.$apply()
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