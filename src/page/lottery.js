angular.module('ued').directive('pageLottery', function (WebApi) {
    return {
        templateUrl: 'page/lottery.html',
        restrict: 'E',
        link: function (scope) {
            // ued.title('雅培菁智')
             
            var source = ued.query("source")
            var type = "noprize1"
            var channel = ""
            if(source == "other" || source == "line"){
                type = "noprize2"
                channel = "（"+source+"）"
            }

            scope.line = false
            if(source == "line"){
                scope.line = true
            }
            var isLottery = false

            var weixinUserInfo = ued.cookie.getObject('Weixin_userInfo')
            var FromUserName = weixinUserInfo.FromUserName

            var loading,id

            scope.mask = 'close'
            
            scope.share1 = function(){
                ued.baidu.trackEvent('炫耀一下'+channel)
                scope.mask='share'
                // scope.$apply()
            }

            scope.lottery = function(){
                ued.baidu.trackEvent('抽奖按钮'+channel)
                if(isLottery){
                    weui.alert("你已抽过奖！")
                    return
                }
                showLoading()
                WebApi.lottery({
                    openid:FromUserName
                })
                .always(function(res){
                    hideLoading()
                })
                .then(function(res){
                    id = res.result._id
                    scope.mask = "prize"
                    isLottery = true
                    scope.$apply()
                },function(res){
                    if(res.error_code == 502){
                        scope.mask = type
                        isLottery = true
                    }else{
                        isLottery = false
                        weui.alert(res.errorMsg)
                    }
                })
            }

            scope.submit = function(){
                // $("#nainiu")[0].play();
                var name = $.trim(scope.name)
                var mobile = $.trim(scope.mobile)
                var address = $.trim(scope.address)
                if(!name){
                    weui.alert("姓名不能为空！")
                    return
                }
                if(!mobile){
                    weui.alert("联系方式不能为空！")
                    return
                }
                if(!address){
                    weui.alert("地址不能为空！")
                    return
                }
                
                showLoading()
                WebApi.submitInfo({
                    openid:FromUserName,
                    id:id,//中奖id
                    name:name,//姓名
                    mobile:mobile,  //手机号
                    address:address //地址
                })
                .always(function(res){
                    hideLoading()
                })
                .then(function(res){
                    scope.mask = "close"
                    weui.alert("信息提交成功！")
                },function(res){
                    weui.alert(res.errorMsg)
                })

            }

            function showLoading() {
                loading = weui.loading('加载中...')
            }

            function hideLoading() {
                loading && loading.hide()
            }
        }
    }
})