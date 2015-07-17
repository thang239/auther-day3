'use strict';

app.controller('SignupCtrl', function ($scope, Auth, $state) {
	$scope.signupUser = function (userData) {
		Auth.signup(userData)
		.then(function (signedupUser) {
			$state.go('user', {id: signedupUser._id});
		});
	};
});