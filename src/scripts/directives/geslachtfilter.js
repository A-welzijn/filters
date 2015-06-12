'use strict';
(function (module) {
	try {
		module = angular.module('awelzijn.filters');
	} catch (e) {
		module = angular.module('awelzijn.filters', []);
	}
	module.filter('geslacht', [function () {
		return function (code) {
			if (code == "m") {
				return "Man";
			} else if (code == "v") {
				return "Vrouw";
			} else {
				return code;
			}
		};
	}]);
})();
