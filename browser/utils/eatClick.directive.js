'use strict';

app.directive('eatClick', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.on('click', function () {
				return false;
			});
		}
	};
});