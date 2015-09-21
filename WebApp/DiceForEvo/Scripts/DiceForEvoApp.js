var DiceForEvoApp = angular.module('DiceForEvoApp', ['ngRoute']);

DiceForEvoApp.controller('LandingPageController', LandingPageController);
DiceForEvoApp.controller('PersonController', PersonController);

DiceForEvoApp.factory('CreatePersonFactory', CreatePersonFactory);

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/personInfo/:personId', {
            templateUrl: function (params) { return '/Routes/PersonInfo?personId=' + params.personId; }
        })
        .when('/createPerson', {
            templateUrl: 'Person/Create',
            controller: PersonController
        })
        .when('/diceResult', {
            templateUrl: 'Routes/DiceResult'
        });
}

configFunction.$inject = ['$routeProvider'];


DiceForEvoApp.config(configFunction);