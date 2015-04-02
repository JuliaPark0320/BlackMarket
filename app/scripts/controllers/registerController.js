var storeListModule = angular.module('myApp.storeListModule', []);

storeListModule.controller('registerCtrl',['$scope', function($scope){

    $scope.name = '파리바게트';
    $scope.discount = '50';
    $scope.description = '오늘빵 마감시간 10시까지 모든제품 반값에 드립니다.....';
    $scope.imageUrl = 'http://cfile205.uf.daum.net/image/24357E4F52493FD1034A89';



}]);
