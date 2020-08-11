(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItemByShortName = function(shortName) {
    
    return $http({
      method: "GET",
      url: (ApiPath + "/menu_items.json")
    }).then(function(result) {
      var allItems = result.data.menu_items;
      let foundItems = {};
      for (var index = 0; index < allItems.length; ++index) {
        if (allItems[index].short_name.toUpperCase().indexOf(shortName.toUpperCase()) >= 0) {
          if(allItems[index].short_name.toUpperCase() === shortName){
          foundItems = allItems[index];}
        }
      }
      return foundItems;
    });
  };


  
  

}



})();
