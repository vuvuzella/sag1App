// Members route of sag1Application
angular.module('sag1Application.members', 
    [
      'firebase',
    ])


.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/members', {
      templateUrl:      'members/members.template.html',
      controller:       'MembersController',
      reloadOnSearch:   false
    })

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
      
      // TODO: Test codes in file reading in Angular
      // TODO: Test codes in using js-xlsx library in Angular
      // TODO: Make this into a service
      // TODO: Wrap js-xlsx into a module so it won't pollute Global space
      $scope.fileNameChanged = function(fileData) {
        var data = fileData.files[0];
        var reader = new FileReader();
        reader.onload = function() {
          var record = reader.result;
          
          var workbook = XLSX.read(record, {type : 'binary'});
          var worksheet = workbook.Sheets[workbook.SheetNames[0]];
          for (cell in worksheet) {
            if (cell[0] === '!') {
              console.log('!');
              continue;
            }
            console.log(cell + ' =  ' + JSON.stringify(worksheet[cell].v));
          }
          $scope.members = XLSX.utils.sheet_to_json(worksheet);
          $scope.$apply();
        }
        reader.readAsBinaryString(data);
      };
}]);

