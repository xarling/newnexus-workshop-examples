var app = angular.module('myApp', []);

app.factory('Data', function () {
    return {message: "test"};
});


app.controller('EersteCtrl', function ($scope, Data) {
    $scope.data = Data;
});

app.controller('TweedeCtrl', function ($scope, Data) {
    $scope.data = Data;
});

app.controller('DerdeCtrl', function ($scope, Data) {
    $scope.data = Data;

    $scope.reversedMsg = function (message) {
        return message.split("").reverse().join("");
    };
});

app.filter('reverse', function () {
    return function (text) {
        return text.split("").reverse().join("");
    }
});




