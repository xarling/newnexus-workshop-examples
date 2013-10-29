'use strict';


//let op, modules!
var app = angular.module('restApp', ['ngResource']);

app.factory('Test', ['$resource', function ($resource, $config) {
    return $resource('http://localhost:8082/test/:id');
}]);

app.controller('RestCtrl', function ($scope, Test, $http) {
    $scope.data = Test.get({id:1});

    //$scope.data = $http.get('http://localhost:8082/test/1');
});

