'use strict';

app.controller('UserListCtrl', function ($scope, users, User) {
	$scope.users = users;
	$scope.addUser = function () {
		var n = Math.floor(Math.random()*96),
			g = (Math.random() > 0.5 ? 'women' : 'men');
		var randPhoto = 'http://api.randomuser.me/portraits/thumb/' + g + '/' + n + '.jpg';
		$scope.userAdd.photo = randPhoto;
		$scope.userAdd.save()
		.then(function (user) {
			$scope.userAdd = new User();
			$scope.users.unshift(user);
		});
	};
	
	$scope.userSearch = new User();

	$scope.userAdd = new User();
});