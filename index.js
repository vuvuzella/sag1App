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

  $routeProvider.when('/members', {
    templateUrl:      'members.html',
    reloadOnSearch:   false
  });
});

sag1Application.controller('MainController', function($rootScope, $scope) {
  var items = [];
  var due;

  for(var count = 0; count < 100; count++) {
    due = count % 2? '1000': 'none';
    items.push({
      name: 'Mr. Member ' + count,
      due: due
    });
  }
  
  $scope.scrollItems = items;
});

