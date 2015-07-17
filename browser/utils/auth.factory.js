'use strict';

app.factory('Auth', function (User, $http, $state, $rootScope) {
	$rootScope.isLoggedIn = false;
	$rootScope.isAdmin = false;
	$rootScope.currentUser = null;
	return {
		signup: function (credentials) {
			return new User(credentials).save()
			.then(function (user) {
				$rootScope.isLoggedIn = true;
				$rootScope.isAdmin = user.isAdmin;
				$rootScope.currentUser = user;
				return user;
			});
		},
		login: function (credentials) {
			return $http.post('/auth/login', credentials)
			.then(function (response) {
				return response.data;
			})
			.then(function (user) {
				$rootScope.isLoggedIn = true;
				$rootScope.isAdmin = user.isAdmin;
				$rootScope.currentUser = user;
				return user;
			})
		},
		logout: function () {
			$http.get('/auth/logout').then(function () {
				$rootScope.isLoggedIn = false;
				$rootScope.isAdmin = false;
				$rootScope.currentUser = null;
				$state.go('home');
			});
		},
		refreshCurrentUser: function () {
			return $http.get('/api/users/me')
			.then(function (response) {
				return response.data;
			})
			.then(function (user) {
				if (user) $rootScope.isLoggedIn = true;
				else $rootScope.isLoggedIn = false;
				$rootScope.isAdmin = user && user.isAdmin;
				$rootScope.currentUser = user;
				return user;
			});
		}
	}
});