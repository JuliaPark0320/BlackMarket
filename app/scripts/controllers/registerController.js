var storeListModule = angular.module('myApp.storeListModule', ['myApp.storeFactory']);

storeListModule.controller('registerCtrl',['$scope', 'storeFactory', function($scope, storeFactory){

    $scope.storeList= [];

    storeFactory.getStoreList().success(function(data){
            $scope.storeList = data;
            console.log(data);
        });


}]);
