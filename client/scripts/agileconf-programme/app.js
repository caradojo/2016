var AgileGrenobleApp = angular.module('AgileGrenobleApp', ['ngResource', 'gridster', 'ngRoute', 'ngAnimate', 'ngSanitize'])
	.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/principal', {
				templateUrl: 'client/templates/agileconf-programme/principal.html',
				controller: 'ProgrammePrincipalCtrl'
			}).
			when('/session/:id', {
				templateUrl: 'client/templates/agileconf-programme/session.html',
				controller: 'ProgrammeSessionCtrl'
			}).
			otherwise({
				redirectTo: '/principal'
			});
		}
	]);

