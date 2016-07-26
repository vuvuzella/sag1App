// Training route
'use strict';

angular.module('sag1Application.training', 
    [
      'ngRoute'
    ])


.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/training', {
    templateUrl:      'training/training.template.html',
    controller:       'TrainingController',
    reloadOnSearch:   false
  });

}])


.controller('TrainingController', ['$scope', 
    function($scope) {
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
}]);
