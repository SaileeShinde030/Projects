(function () {
    'use strict';

    angular
        .module('ShoppingList')
        .controller('ToBuyController', ToBuyController);
    

    ToBuyController.$inject = ['ShoppingListCheckOffService']; 

    function ToBuyController(ShoppingListCheckOffService) {
        
        let toBuy = this;
        toBuy.toBuyShoppingList = ShoppingListCheckOffService.getBuyList();
    
        toBuy.buy = function (index) {                   
          ShoppingListCheckOffService.shoppingList(index);
        };         
    }
})();
