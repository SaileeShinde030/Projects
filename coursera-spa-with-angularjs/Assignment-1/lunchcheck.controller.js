(function () {
    'use strict';

    angular
        .module('LunchCheck')
        .controller('LunchCheckController', LunchCheckController);

        LunchCheckController.$inject = ['$location']; 

    function LunchCheckController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.checkDishes = function () {
            var num = countDishes(vm.dishes);
            vm.message = buildMessage(num);
          };
        
          function countDishes(dishes) {
            var count = 0;
            if (dishes) {
              var array = dishes.split(',');
              for (var idx in array) {
                if (array[idx].trim().length != 0) {
                  count++;
                }
              }
            }
            return count;
          }
        
          function buildMessage(num) {
            if (num === 0) {
              return 'Please enter data first';
            }
            else if (num <= 3) {
              return 'Enjoy!';
            } else {
              return 'Too much!';
            }
          }  

       
    }
})();
