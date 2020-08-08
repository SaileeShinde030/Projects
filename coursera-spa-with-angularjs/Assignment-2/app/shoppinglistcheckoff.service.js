(function () {
    'use strict';

    angular
        .module('ShoppingList',[])
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

        ShoppingListCheckOffService.$inject = []; 

    function ShoppingListCheckOffService() {
        
        let service = this;
        let buyList =[
                {name: "cookies", quantity: 10},
                {name: "milk", quantity: 7},
                {name: "chocolate", quantity: 6},
                {name: "maggi", quantity: 4},
                {name: "chips", quantity: 5 }
            ];
        let boughtList = [];
        
        service.shoppingList = function(index)
        {
            boughtList.push(buyList[index]);
            buyList.splice(index,1);
        };

        service.getBuyList = function(index)
        {
             return  buyList     
        };

        service.getBoughtList = function(index)
        {
             return  boughtList;     
        };
        
    }
})();
