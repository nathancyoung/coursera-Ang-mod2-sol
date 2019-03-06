(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.toBuyItems;
  toBuy.purchase  =  ShoppingListCheckOffService.purchase;
 
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.alreadyBoughtItems;
  
}

// service is a method for loosely coupling parallel communicating between different elements.
function ShoppingListCheckOffService() {
  var service = this;  // for convenience so we don't need this later on.

  // List of shopping items
  service.toBuyItems = [
    {name: 'Potatoes', quantity: '3 kg' },
    {name: 'Cat Food', quantity: '2 cans'},
    {name: 'Milk', quantity: '1 liter'},
    {name: 'Paper Towel', quantity: '6 rolls'},
    {name: 'Thin Mint Cookies', quantity: '4 boxes'},
    {name: 'Coursera-ReactJS', quantity: '2 courses'}
  ];

  service.alreadyBoughtItems = [];

  service.purchase = function (itemIndex) {
    service.alreadyBoughtItems.push(service.toBuyItems[itemIndex]);    
    service.toBuyItems.splice(itemIndex,1);
  };

  service.buyItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

}

})();
