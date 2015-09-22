'use strict';
(function (module) {
	try {
		module = angular.module('awelzijn.filters');
	} catch (e) {
		module = angular.module('awelzijn.filters', []);
	}
	module.filter('vestiging', [function () {
		return function (vestigingsNummer) {
			if (vestigingsNummer == '0') {
				return 'Hoofdvestiging';
			}
			else {
				return vestigingsNummer;
			}
		};
	}]);
})();
