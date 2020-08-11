describe('The MenuController', function() {
    'use strict';
  
    var myInfoController;
    var ApiPath="https://www.davidchuschinabistro.com/"
    var myInfo = [{
    "short_name": "L1",
    "email": "S@K.com",
    "favourite": "A1",
    "favouriteMenuItem": {id: 1, short_name: "A1", name: "Won Ton Soup with Chicken", description: "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions", price_small: 3},
    "firstName": "Pooja",
    "lastName": "kale",
    "phone": "7738539220"
    }];
  
    /**
     * Gets called before each unit test it()
     */
    beforeEach(function() {
      // Load module
      module('public');
  
      // Load any dependencies
      inject(function ($injector) {
        var $controller = $injector.get('$controller');
        var myInfoData = $injector.get('SignUpDataService');
        

        // Instantiate controller
        myInfoController = $controller('MyInfoController', {   
        
          MyInfoController:myInfo,
        
        ApiPath:"https://www.davidchuschinabistro.com/"
        });
      });
    });
  
    it('should initialize with SignUpData', function() {
      expect(myInfoController).toBeDefined();
      expect(myInfoController.basePath).toEqual(ApiPath);
    });
  
  
  
  });
  