(function() {
  'use strict';

  angular.module('NarrowItDown')
    .directive('loader', loader);

  function loader() {
    let ddo = {
      templateUrl: 'app/loader/loader.template.html',
    };

    return ddo;
  }

})();
