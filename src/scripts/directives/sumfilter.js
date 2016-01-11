'use strict';
(function (module) {
    try {
        module = angular.module('awelzijn.filters');
    } catch (e) {
        module = angular.module('awelzijn.filters', []);
    }
    module.filter('sum', [function () {
        return function (array, property) {
            return _.sum(array, function (object) {
                return object[property];
            });
        };
    }]);
})();
