(function () {
    'use strict';

    angular
        .module('NarrowItDown')
        .factory('MenuSearchFactory', MenuSearchFactory);

        MenuSearchFactory.$inject = ['$http', 'ApiBasePath']; 
        
        function MenuSearchFactory($http,ApiBasePath) {
        let menuSearchFactory = {};

            menuSearchFactory.MenuSearch = function () {
                return $http({
                    method: "Get",
                    url: `${ApiBasePath}//menu_items.json`,
                    
                });
            }
    
        return menuSearchFactory
        
    }
})();
