var app = angular.module('myApp', []);

app.factory('Data', function() {
	return {message: "test"};
});

app.filter('reverse', function() {
	return function(text) {
		return text.split("").reverse().join("");
}});

function EersteCtrl($scope, Data) {
	$scope.data = Data; 
}

function TweedeCtrl($scope, Data) {
	$scope.data = Data;

	$scope.reversedMsg = function() {
		return $scope.data.message.split("").reverse().join("");
	};
}

function DerdeCtrl($scope, Data) {
	$scope.data = Data;

	$scope.reversedMsg = function(message) {
		return message.split("").reverse().join("");
	};
}



