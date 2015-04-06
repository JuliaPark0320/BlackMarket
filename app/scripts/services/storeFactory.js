var storeFactory = angular.module('myApp.storeFactory',[]);
storeFactory.factory('storeFactory', ['$http', function(http){
    var factory = {};
    factory.getStoreList = function () {
        return http.get('resource/storeList');
    }

    return factory;

}]);