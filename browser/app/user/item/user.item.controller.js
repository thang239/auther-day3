'use strict';

app.controller('UserItemCtrl', function ($scope, $state) {
	$scope.save = function () {
		$scope.user.save();
	}
	$scope.removeUser = function () {
		$scope.user.destroy().then(function () {
			$scope.user.isDestroyed = true;
		});
	};
});