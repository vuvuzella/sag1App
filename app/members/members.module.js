// Members route of sag1Application
angular.module('sag1Application.members', 
    [
      'firebase'
    ])


.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/members', {
    templateUrl:      'members/members.template.html',
    controller:       'MembersController',
    reloadOnSearch:   false
  });

}])

.controller('MembersController', ['$rootScope', '$scope', '$firebaseArray',
    function($rootScope, $scope, $firebaseArray) {
      /** Firebase initialization **/
      // var dataUrl = "https://sag1application-fe490.firebaseio.com/members/0";
      // var dataReference = new Firebase(dataUrl);
      // var data = $firebaseObject(dataReference);
      // data.$bindTo($scope, "members");
  
      // Code below works on Firebase 2.4.2 and angularFire 1.2.0
      // var dataArrUrl = "https://sag1application-fe490.firebaseio.com/members/";
      // var dataArrRef = new Firebase(dataArrUrl);
      // var dataArr = $firebaseArray(dataArrRef);
      // $scope.members = dataArr;

      // Use storage.service
}]);
