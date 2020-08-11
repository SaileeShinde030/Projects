describe('menudataservice', function () {

    var menudataservice;
    var $httpBackend;
    var ApiBasePath;
  
    beforeEach(function () {
      module('data');
  
      inject(function ($injector) {
        menudataservice = $injector.get('MenuDataService');
        $httpBackend = $injector.get('$httpBackend');
        ApiBasePath = $injector.get('ApiBasePath');
      });
    });
  
    it('should return categories list', function() {
      $httpBackend.whenGET(ApiBasePath + '/categories.json').respond(['Lunch', 'Dessert']);
      menudataservice.getAllCategories().then(function(response) {

        expect(response).toEqual(['Lunch', 'Dessert']);
      });
      $httpBackend.flush();
    });
  
    
    it('should return menu items for category A', function() {
        $httpBackend.whenGET(ApiBasePath + '/menu_items.json?category=A').respond(['Won Ton Soup with Chicken', 'Egg Drop Soup']);
        menudataservice.getItemsForCategory('A').then(function(response) {
          expect(response).toEqual(['Won Ton Soup with Chicken', 'Egg Drop Soup']);
        });
        $httpBackend.flush();
      });
       });
  