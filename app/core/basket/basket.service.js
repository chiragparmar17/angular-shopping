'use strict';

angular.
    module('core.basket').
    factory('BasketService', [
        function () {
            var BasketService = {
                basketItems: [],
                basketTotal: 0.00,
                addToBasket: function (product) {
                    var isProductAdded = false;

                    for (var basketItemVar of this.basketItems) {
                        if (basketItemVar.product.sku == product.sku) {
                            basketItemVar.quantity = basketItemVar.quantity + 1;
                            isProductAdded = true;
                            toastr.clear();
                            toastr.warning('Item already present, added +1 quantity. Total Quantity : ' + basketItemVar.quantity, basketItemVar.product.title);
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
                        toastr.clear();
                        toastr.success('Item added to the Basket successfully.', basketItem.product.title)
                    }
                    this.basketTotal = parseFloat(this.basketItems.reduce(function (sum, basketItem) {
                        return sum + parseFloat(basketItem.product.price * basketItem.quantity);
                    }, 0));
                    console.log("Total: " + parseFloat(this.basketTotal).toFixed(2));
                    console.log(this.basketItems);
                },
                getBasket: function () {
                    return this.basketItems;
                },
                getBasketTotal: function () {
                    return this.basketTotal;
                }
            }
            return BasketService;
        }
    ]);