'use strict';
(function (module) {
	try {
		module = angular.module('awelzijn.filters');
	} catch (e) {
		module = angular.module('awelzijn.filters', []);
	}
	module.filter('insz', [function () {
		return function (insz) {
			if (insz) {
				return insz.substring(0, 2) + '.' + insz.substring(2, 4) + '.' + insz.substring(4, 6) + '-' + insz.substring(6, 9) + '.' + insz.substring(9, 11);
			} else {
				return '-';
			}
		};
	}]);
})();
