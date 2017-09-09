'use strict';

angular.module("core")
    .filter("checkmark", function(){
        return function (input, data){
            return input ? '' : '\u2718' + data;
        }
    });
