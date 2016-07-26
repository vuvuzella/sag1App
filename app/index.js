'use strict';

var sag1Application = angular.module('sag1Application', [
    'ngRoute',
    'mobile-angular-ui',
    'sag1Application.home',
    'sag1Application.members',
    'sag1Application.training'
]);

// TODO: Search for $transform
// sag1Application.run(function($transform) {
//   window.$transform = $tranform;
// });

sag1Application.config(function($routeProvider) {
  /** Application specific Angular configuration **/
});

sag1Application.controller('MainController',
    function($rootScope, $scope) {

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
