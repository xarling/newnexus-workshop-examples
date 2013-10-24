var dexterApp = angular.module('dexterApp', []);

dexterApp.directive('dexter', function() {
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="well"><div ng-transclude></div></div>'
	};
});
