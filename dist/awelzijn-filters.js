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
;'use strict';
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
;'use strict';
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
;'use strict';
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
;'use strict';
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
;'use strict';
(function (module) {
	try {
		module = angular.module('awelzijn.filters');
	} catch (e) {
		module = angular.module('awelzijn.filters', []);
	}
	module.filter('nowhitespace', [function () {
		return function (value) {
			return (!value) ? '' : value.replace(/ /g, '');
		};
	}]);
})();;'use strict';
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
;