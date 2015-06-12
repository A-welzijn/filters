'use strict';
(function (module) {
  try {
    module = angular.module('awelzijn.filters');
  } catch (e) {
    module = angular.module('awelzijn.filters', []);
  }
  module.filter('datum', ['$filter', function ($filter) {
    return function (datum) {
      var date = new Date(datum).toDateString();
      var vandaag = new Date();

      var gisteren = new Date();
      gisteren.setDate(vandaag.getDate() - 1);

      var morgen = new Date();
      morgen.setDate(vandaag.getDate() + 1);

      if (date === vandaag.toDateString()) {
        return "vandaag";
      } else if (date === morgen.toDateString()) {
        return "morgen";
      } else if (date === gisteren.toDateString()) {
        return "gisteren";
      } else {
        return $filter('date')(datum, "d MMM 'yy");
      }
    };
  }]);
})();
