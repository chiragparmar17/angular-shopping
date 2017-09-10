'use strict';

angular.
    module('core.basket').
    factory('BasketService', [
        function () {
            var BasketService = {
                basketItems: [],
                addToBasket: function (product) {
                    var isProductAdded = false;
                    
                    for (var basketItemVar of this.basketItems) {
                        if (basketItemVar.product.sku == product.sku) {
                            basketItemVar.quantity = basketItemVar.quantity + 1;
                            isProductAdded = true;
                            toastr.warning('Item already present, added +1 quantity.', basketItemVar.product.title);
                            break;
                        }
                    }
                    if (!isProductAdded) {
                        var basketItem = {
                            product: "",
                            quantity: 0
                        }
                        basketItem.product = product;
                        basketItem.quantity = 1;
                        this.basketItems.push(basketItem);
                        toastr.success('Item added to the Basket successfully.', basketItem.product.title)
                    }
                    console.log(this.basketItems);
                },
                getBasket: function () {
                    return this.basketItems;
                }
            }
            return BasketService;
        }
    ]);