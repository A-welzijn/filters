'use strict';
(function (module) {
	try {
		module = angular.module('awelzijn.filters');
	} catch (e) {
		module = angular.module('awelzijn.filters', []);
	}
	module.filter('capitalize', [function () {
		return function (origineleNaam) {
		if (origineleNaam && origineleNaam !== '-') {
			var woorden = origineleNaam.split(' ');
			for (var i = 0; i < woorden.length; i++) {
				woorden[i] = woorden[i].charAt(0).toUpperCase() + woorden[i].slice(1).toLowerCase();
			}
			return woorden.join(' ');
		} else {
			return origineleNaam;
		}
	};
	}]);
})();
