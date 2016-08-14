// Home route for sag!Application
var home = angular.module('sag1Application.home', [
    'ngRoute'
]);

// Home view specific configuration
home.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/', {
    templateUrl:      'home/home.template.html',
    controller:       'HomeController',
    reloadOnSearch:   false
  });
}])

.controller('HomeController', [function() {

}]);
