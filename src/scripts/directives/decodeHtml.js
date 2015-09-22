'use strict';
(function (module) {
	try {
		module = angular.module('awelzijn.filters');
	} catch (e) {
		module = angular.module('awelzijn.filters', []);
	}
	module.filter('decodeHtml', [function () {
		return function (html, limit) {
			var decoded = html.replace(/<[^>]+>/gm, '').replace(/&nbsp;/gm, ' ');
			var decodedSubstring = decoded;
			if (limit) {
				decodedSubstring = decoded.substring(0, limit);
				if (decoded.length > limit) {
					decodedSubstring += "...";
				}
			}

			return decodedSubstring;
		};
	}]);
})();
