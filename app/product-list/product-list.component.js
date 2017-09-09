'use strict';

angular.
    module("productList").
    component("productList", {
        templateUrl: "product-list/product-list.template.html",
        controller: ['ProductService',
            function ProductListController(ProductService){
                var ctrl = this;
                ctrl.products = [];
                ctrl.cartItems = [];
                ProductService.getList().then(function(products){
                    ctrl.products = products;
                });

                ctrl.addToCart = function(product){
                    var isProductAdded = false;
                    var cartItem = {
                        product : "",
                        quantity : 0
                    }
                    for(var cartItem of ctrl.cartItems){
                        if(cartItem.product.sku == product.sku) {
                            cartItem.quantity = cartItem.quantity + 1; 
                            isProductAdded = true;
                            break;
                        }
                    }
                    if(!isProductAdded){
                        cartItem.product = product;
                        cartItem.quantity = 1;
                        ctrl.cartItems.push(cartItem);
                    }
                    console.log(ctrl.cartItems);
                }
            }
        ]
    })