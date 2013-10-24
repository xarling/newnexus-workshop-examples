var dexterApp = angular.module('dexterApp', []);

dexterApp.directive('dexter', function() {
	return {
		restrict: 'E',
		template: 'Omelette du fromage'
	};
});
