/// <reference path='_all.ts' />

module eadg {
    'use strict';
    angular.module('eadg', ['ngRoute'])
        .controller('MainCtrl', MainController)
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app.html',
                    controller: 'MainCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
}