'use strict';

//Basket Dropdown Module
angular.
    module("basketDropdown").
    component("basketDropdown", {
        templateUrl: 'basket-dropdown/basket-dropdown.template.html',
        controller: ["$scope", "BasketService",
            function BasketDropdownController($scope, BasketService) {
                var ctrl = this;
                $scope.$watch(function () {
                    return BasketService.getBasketTotal();
                }, function (newValue, oldValue) {
                    ctrl.basketTotal = parseFloat(newValue).toFixed(2);
                });
                $scope.$watch(function () {
                    return BasketService.getBasket();
                }, function (newValue, oldValue) {
                    ctrl.basketItems = newValue;
                });
            }
        ]
    });