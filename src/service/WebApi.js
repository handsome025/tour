angular.module('ued').service('WebApi', function () {
    this.lottery = function (data) {
        return ued.post('/eleva/index/prize',data)
    }

    this.submitInfo = function (data) {
        return ued.post('/eleva/index/register', data)
    }
})
