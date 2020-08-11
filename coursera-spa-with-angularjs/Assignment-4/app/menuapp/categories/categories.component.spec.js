describe('Category component', function() {
    'use strict';
  
    var CategoryComponent;
    var category =
      {
        "id": 61,
        "short_name": "L",
        "name": "Lunch",
        "special_instructions": "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
        "created_at": "2016-08-05T19:41:59.147Z",
        "updated_at": "2016-08-05T19:41:59.147Z"
      };
  
    beforeEach(function() {
      // Load module
      module('MenuApp');
  
      // Load any dependencies
      inject(function ($injector) {
        var $componentController = $injector.get('$componentController');
        CategoryComponent = $componentController('categories', null, {
          items: category
        });
  
      });
    });
  
    it('should initialize with category', function() {
      expect(CategoryComponent).toBeDefined();
      expect(CategoryComponent.items).toEqual(category);
    });
  
  
  
  });
  