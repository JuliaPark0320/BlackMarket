'use strict';
var myApp = angular.module('myApp', ['ngRoute', // Route service
    'myApp.storeListModule'  // controller
    ,'myApp.storeFactory'
]);

myApp.config(['$routeProvider', function($routeProvider) {
        // Login
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'registerCtrl'
        });

        $routeProvider.when('/register',{
            templateUrl : 'partials/register.html',
            controller : 'registerCtrl'
        })


        
        // Default
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);