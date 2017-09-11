'use strict';

//Basket Dropdown Module
angular.
    module("basketDropdown").
    component("basketDropdown", {
        templateUrl: 'basket-dropdown/basket-dropdown.template.html',
        controller: ["$scope", "BasketService",
            function BasketDropdownController($scope, BasketService) {
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