'use strict';

angular.
    module("header").
    component("header", {
        templateUrl: 'header/header.template.html',
        controller: [function HeaderController() {
            var ctrl = this;
            ctrl.title = "Shopping Application";

        }]
    })