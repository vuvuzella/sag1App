// Home route for sag!Application
angular.module('sag1Application.home', 
    [
    ])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl:      'home/home.template.html',
    controller:       'HomeController',
    reloadOnSearch:   false
  });

}])

.controller('HomeController', [function() {

}]);
