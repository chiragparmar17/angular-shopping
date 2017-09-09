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
            otherwise('/products');
        }
    ])