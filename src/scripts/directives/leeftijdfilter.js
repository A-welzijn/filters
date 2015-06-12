'use strict';
(function (module) {
	try {
		module = angular.module('awelzijn.filters');
	} catch (e) {
		module = angular.module('awelzijn.filters', []);
	}
	module.filter('leeftijd', [function () {
		return function (geboortedatum) {
			var vandaag = new Date();
			geboortedatum = new Date(geboortedatum);
			var leeftijd = vandaag.getFullYear() - geboortedatum.getFullYear();
			var m = vandaag.getMonth() - geboortedatum.getMonth();
			if (m < 0 || (m === 0 && vandaag.getDate() < geboortedatum.getDate())) {
				leeftijd--;
			}
			return leeftijd;
		};
	}]);
})();
