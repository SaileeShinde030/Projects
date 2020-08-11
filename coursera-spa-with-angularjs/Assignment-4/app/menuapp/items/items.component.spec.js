describe('Item component', function() {
    'use strict';
  
    var ItemComponent;
    var menuItem = {
        "id": 850,
        "short_name": "L1",
        "name": "Orange Chicken2",
        "description": "chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra",
        "price_small": null,
        "price_large": 9.75,
        "small_portion_name": null,
        "large_portion_name": null,
        "created_at": "2016-08-05T19:42:11.381Z",
        "updated_at": "2016-08-19T20:02:06.803Z",
        "category_short_name": "L",
        "image_present": true
      };
  
      beforeEach(function() {
      // Load module
      module('MenuApp');
  
      // Load any dependencies
      inject(function ($injector) {
        var $componentController = $injector.get('$componentController');
        ItemComponent = $componentController('items', null, {
            items: menuItem
        });
      });
    });
  
    it('should initialize with menu item', function() {
      expect(ItemComponent).toBeDefined();
      expect(ItemComponent.items).toEqual(menuItem);
    });
  
  
  
  });
  