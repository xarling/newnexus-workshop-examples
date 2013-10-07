var shareApp = angular.module('shareApp', []);

shareApp.factory('ShareService', function() {
	return {message: 'data van de shared service'};
});

function EersteCtrl($scope, ShareService) {
	$scope.data = ShareService;
}


function TweedeCtrl($scope, ShareService) {
	$scope.differentNameForData = ShareService;
}

