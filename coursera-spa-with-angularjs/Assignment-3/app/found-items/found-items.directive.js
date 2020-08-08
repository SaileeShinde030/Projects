(function() {
  'use strict';

  angular.module('NarrowItDown')
    .directive('foundItems', foundItems);

  function foundItems() {
    let ddo = {
      templateUrl: 'app/found-items/found-items.template.html',
      scope: {
        items: '<',
        message: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

})();
