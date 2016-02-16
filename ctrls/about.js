'use strict';

angular.module('todoList.about', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
    });
}])

.controller('AboutCtrl', function () {

});
