'use strict';

angular.
    module("core.product").
    factory("ProductService", ["$http",
        function ($http) {
            var ProductService = {
                products: [],
                getList: function () {
                    return $http.get('../products/products.json').
                        then(function(response){
                            ProductService.products = response.data;
                            return response.data;
                        },function(error){
                            return "There was an error retrieving the products.";
                        })
                }
            }
            return ProductService;
        }
    ]);