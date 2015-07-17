'use strict';

app.controller('LoginCtrl', function ($scope, Auth, $state) {
	$scope.loginUser = function (userData) {
		Auth.login(userData)
		.then(function (loggedinUser) {
			$state.go('user', {id: loggedinUser._id});
		})
		.catch(function (e) {
			console.log('error logging in', e);
		});
	};
});