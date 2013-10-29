'use strict';

var app = angular.module('routeApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/view1.html',
                controller: 'MainCtrl'
            })
            .when('/view2', {
                templateUrl: 'views/view2.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

app.controller('MainCtrl', function($scope) {

});
