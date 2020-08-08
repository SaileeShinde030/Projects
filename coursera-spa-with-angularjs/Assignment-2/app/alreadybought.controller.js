(function () {
    'use strict';

    angular
        .module('ShoppingList')
        .controller('AlreadyBoughtController', AlreadyBoughtController);
        

        AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']; 

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        
        let bought  = this;
        bought.toBoughtShoppingList = ShoppingListCheckOffService.getBoughtList();
         
    }
})();
