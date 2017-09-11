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
                    this.updateTotal();
                    console.log("Total: " + parseFloat(this.basketTotal).toFixed(2));
                    console.log(this.basketItems);
                },
                updateTotal: function(){
                    this.basketTotal = parseFloat(this.basketItems.reduce(function (sum, basketItem) {
                        return sum + parseFloat(basketItem.product.price * basketItem.quantity);
                    }, 0));
                },
                getBasket: function () {
                    return this.basketItems;
                },
                getBasketTotal: function () {
                    return this.basketTotal;
                },
                increaseProductQuantity: function(product){
                    for (var basketItemVar of this.basketItems) {
                        if (basketItemVar.product.sku == product.sku) {
                            basketItemVar.quantity = basketItemVar.quantity + 1;
                            toastr.clear();
                            toastr.warning('Added +1 quantity.', basketItemVar.product.title);
                            break;
                        }
                    }
                    this.updateTotal();
                    return this.basketItems;
                },
                decreaseProductQuantity: function(product){
                    var toastrMsg = '';
                    for (var basketItemVar of this.basketItems) {
                        if (basketItemVar.product.sku == product.sku) {
                            basketItemVar.quantity = basketItemVar.quantity - 1;
                            if(basketItemVar.quantity == 0){
                                toastrMsg = 'Removed the product from basket.';
                                this.basketItems = this.basketItems.filter(
                                    function(basketIt){
                                        return basketIt.product.sku != basketItemVar.product.sku;
                                    });
                            }else{
                                toastrMsg = 'Removed 1 quantity.';
                            }
                            toastr.clear();
                            toastr.warning(toastrMsg, basketItemVar.product.title);
                            break;
                        }
                    }
                    this.updateTotal();
                    return this.basketItems;
                }
            }
            return BasketService;
        }
    ]);