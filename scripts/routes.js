'use strict';

var app = angular.module('routeApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/view1', {
                templateUrl: 'views/view1.html',
                controller: 'MainCtrl'
            })
            .when('/view2', {
                templateUrl: 'views/view2.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/view1'
            });
    }).config(['$locationProvider', function ($location) {
        $location.html5Mode(true).hashPrefix('!');
    }]
    );

app.controller('MainCtrl', function($scope) {

});
