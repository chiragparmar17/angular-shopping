'use strict';

//Basket Items Module
angular.
    module("basketItems").
    component("basketItems", {
        templateUrl: 'basket-items/basket-items.template.html',
        controller: ["$scope", "BasketService",
            function BasketItemsController($scope, BasketService) {
                var ctrl = this;
                console.log("In BasketItemsController");
                ctrl.basketItems = BasketService.getBasket();
            }
        ]
    });