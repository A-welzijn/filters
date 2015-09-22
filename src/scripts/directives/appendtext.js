'use strict';
(function (module) {
	try {
		module = angular.module('awelzijn.filters');
	} catch (e) {
		module = angular.module('awelzijn.filters', []);
	}
	module.filter('append', [function () {
		return function (input, appendWith) {
			if (input) {
				return input + appendWith
			}
		};
	}]);
	module.filter('prepend', [function () {
		return function (input, prependWith) {
			if (input) {
				return prependWith + input
			}
		};
	}]);
})();
