'use strict';

var sag1Application = angular.module('sag1Application', [
    'ngRoute',
    'mobile-angular-ui',
    'firebase'
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

sag1Application.controller('MainController',
    function($rootScope, $scope, $firebaseArray) {
  /** Firebase initialization **/
  // var dataUrl = "https://sag1application-fe490.firebaseio.com/members/0";
  // var dataReference = new Firebase(dataUrl);
  // var data = $firebaseObject(dataReference);
  // data.$bindTo($scope, "members");

  // Code below works on Firebase 2.4.2 and angularFire 1.2.0
  var dataArrUrl = "https://sag1application-fe490.firebaseio.com/members/";
  var dataArrRef = new Firebase(dataArrUrl);
  var dataArr = $firebaseArray(dataArrRef);
  $scope.members = dataArr;

  /** Firebase initialization **/
  //var config = {
  //  apiKey      : "AIzaSyCJxbEQGLXqenCMMVs3s61rsbi6R3-WXnA",
  //  authDomain  : "sag1application-fe490.firebaseapp.com",
  //  databaseURL : "https://sag1application-fe490.firebaseio.com",
  //  storageBucket : "sag1application-fe490.appspot.com"
  //};
  //firebase.initializeApp(config);
  //var database = $firebaseObject(firebase.database().ref('/members'));
  //database.$bindTo($scope, "members");

  // database.ref('members/').on('value', function(data){
  //   $scope.members = data;
  // });


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

/*
 * Database: Firebase
 * Url: https://sag1application-fe490.firebaseio.com/members 
 * Data strucure:
 * Training Document object:
 * {
 *  date: dateToday,
 *  attendance: [
 *    {fName: firstName, lName: lastName, paid: true},
 *    {fName: firstName, lName: lastName, paid: false},
 *  ],
 *  totalFeesCollected: 12345
 * }
 *
 * Member Document object:
 * {
 *  fName           : firstName.
 *  lName           : lastName,
 *  position        : bowOrStroke,
 *  memberSince     : dateOfMembership,
 *  totalDues       : runningTotalDue
 * }
 *
 * Non member Document object:
 * {
 *  fName           : firstName.
 *  lName           : lastName,
 *  position        : bowOrStroke,
 * }
 *
 */
