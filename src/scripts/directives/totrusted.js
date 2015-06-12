'use strict';
(function (module) {
  try {
    module = angular.module('awelzijn.filters');
  } catch (e) {
    module = angular.module('awelzijn.filters', []);
  }
  module.filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
				return $sce.trustAsHtml(text);
			};
  }]);
})();
