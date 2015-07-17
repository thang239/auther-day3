'use strict';

app.directive('navbar', function (Auth) {
	return {
		restrict: 'E',
		templateUrl: '/browser/components/navbar/navbar.html',
		link: function (scope) {
			scope.logout = Auth.logout;
		}
	}
});