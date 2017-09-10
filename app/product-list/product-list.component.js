'use strict';

angular.
    module("productList").
    component("productList", {
        templateUrl: "product-list/product-list.template.html",
        controller: ['ProductService','BasketService',
            function ProductListController(ProductService, BasketService){
                var ctrl = this;
                ctrl.products = [];
                ProductService.getList().then(function(products){
                    ctrl.products = products;
                });
                ctrl.addToCart = function(product){
                    BasketService.addToBasket(product);
                }
            }
        ]
    })