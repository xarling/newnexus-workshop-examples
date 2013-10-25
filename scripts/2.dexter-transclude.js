var dexterApp = angular.module('dexterApp', []);

dexterApp.directive('dexter', function() {
	return {
		restrict: 'E',
		scope: {
          say: '@',
          image: '@'
      	},
		transclude: true,
		template: '<well><media class="blue"/></well>'
	};
}).directive('deedee', function() {
	return {
		restrict: 'E',
		scope: {
          image: '@',
          say: '@'
      	},
		transclude: true,
		template: '<well><media class="pink"/></well>'
	};
}).directive('well', function() {
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="well" ng-transclude></div>'
	}
}).directive('container', function() {
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="container" ng-transclude></div>'
	}
}).directive('media', function() {
	return {
		restrict: 'E',
		transclude: true,
		template: '<div class="media"> '+
					'<a class="pull-left" href="#">'+
				      '<img class="media-object" ng-src="{{image}}">'+
					'</a>'+
					'<div class="media-body">{{say}}</div>'+
                  '</div>'
	}
});
