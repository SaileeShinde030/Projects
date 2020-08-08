(function () {
    'use strict';

    angular
        .module('NarrowItDown')
        .controller('NarrowItDownController', NarrowItDownController);


    NarrowItDownController.$inject = ['MenuSearchFactory'];

    function NarrowItDownController(MenuSearchFactory) {
        let vm = this;
        vm.searchTerm = '';
        vm.message = '';
        vm.foundItems = {};


        vm.searchMenuItem = function () {
           
            vm.message = '';
       
            if (vm.searchTerm != '') {
                vm.loading = true;
                MenuSearchFactory.MenuSearch().then((resp) => {
                    vm.loading = false; 
                    let menu = resp.data.menu_items;
                    vm.foundItems = menu.filter(function (item) {                       
                        return item.description.indexOf(vm.searchTerm) !== -1;
                    });
                  
                    if (vm.foundItems.length == 0) {
                        vm.loading = false;
                        vm.message = 'Nothing found!';
                    }
                }) 
                .catch(function(error) {
                    console.log(
                      'Failed loading information. Error Code: %s, Error Message: %s',
                      error.status,
                      error.statusText
                    );
            
                    vm.loading = false;
                    vm.message = 'Error loading information';
                });
             

            }
            else {
                vm.foundItems ={};
                vm.message = 'Nothing found!';
            }

        };
        vm.removeMenuItem = function(index){
            vm.foundItems.splice(index, 1);
        };
      

    }
})();
