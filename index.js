'use strict';

var sag1Application = angular.module('sag1Application', [
    'ngRoute',
    'mobile-angular-ui'
]);

// TODO: Search for $transform
// sag1Application.run(function($transform) {
//   window.$transform = $tranform;
// });

sag1Application.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl:      'home.html',
    reloadOnSearch:   false
  });

  $routeProvider.when('/training', {
    templateUrl:      'training.html',
    reloadOnSearch:   false
  });
});

sag1Application.controller('MainController', function($rootScope, $scope) {
  var items = [];

  for(var count = 0; count < 100; count++) {
    items.push('Mr. Member ' + count);
  }
  
  $scope.scrollItems = items;
});

