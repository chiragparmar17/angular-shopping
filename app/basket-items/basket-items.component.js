'use strict';

//Basket Items Module
angular.
    module("basketItems").
    component("basketItems", {
        templateUrl: 'basket-items/basket-items.template.html',
        controller: ["$scope", "BasketService",
            function BasketItemsController($scope, BasketService) {
                var ctrl = this;
                ctrl.basketItems = BasketService.getBasket();
                $scope.$watch(function () {
                    return BasketService.getBasketTotal();
                }, function (newValue, oldValue) {
                    ctrl.basketTotal = parseFloat(newValue).toFixed(2);
                    console.log(newValue + ' ' + oldValue);
                });
            }
        ]
    });