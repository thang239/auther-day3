'use strict';

app.directive('userItem', function ($state, $rootScope) {
	return {
		restrict: 'E',
		templateUrl: '/browser/app/user/item/user.item.html',
		scope: {
			user: '=model',
			glyphicon: '@',
			iconClick: '&'
		},
		controller: 'UserItemCtrl',
		link: function (scope, elem, attrs) {
			if (attrs.hasOwnProperty('isForm')) scope.isForm = true;
			if (attrs.hasOwnProperty('iconClick')) scope.hasIconClick = true;
			scope.isAdminOrMe = $rootScope.isAdmin || scope.user._id == $rootScope.currentUser._id;
		}
	}
});