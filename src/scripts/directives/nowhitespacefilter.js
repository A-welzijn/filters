'use strict';
(function (module) {
	try {
		module = angular.module('awelzijn.filters');
	} catch (e) {
		module = angular.module('awelzijn.filters', []);
	}
	module.filter('nowhitespace', [function () {
		return function (value) {
			return (!value) ? '' : value.replace(/ /g, '');
		};
	}]);
})();