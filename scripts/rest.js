'use strict';



angular.module('restApp').factory('Test', ['$resource', function ($resource, $config) {
    return $resource('http://localhost:8082/persoon/:id');
}]);
