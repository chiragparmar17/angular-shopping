'use strict';

angular.
    module("shoppingApp").
    config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix("!");
            $routeProvider.
            when('/products', {
                template: '<product-list></product-list>'
            }).
            when('/basket', {
                template: '<basket-items></basket-items>'
            }).
            otherwise('/products');
        }
    ])