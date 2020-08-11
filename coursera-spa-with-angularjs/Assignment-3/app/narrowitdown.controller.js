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
        vm.foundItems = [];
        vm.message = 'Please input search term above and click NARROW IT DOWN FOR ME!';
 
        vm.searchMenuItem = function () {          
            vm.message = '';      
            if (vm.searchTerm != '') {
                vm.loading = true;
                MenuSearchFactory.MenuSearch().then((resp) => {
                    vm.loading = false; 
                    let allItems = resp.data.menu_items;
                    vm.foundItems = [];
                    for (var index = 0; index < allItems.length; ++index) {
                      if (allItems[index].description.toLowerCase().indexOf(vm.searchTerm.toLowerCase()) >= 0) {
                        vm.foundItems.push(allItems[index]);
                      }
                    }
                    

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
                vm.foundItems =[];
                vm.message = 'Nothing found!';
            }

        };

        vm.removeMenuItem = function(index){
            vm.foundItems.splice(index, 1);
        };
      

    }
})();
