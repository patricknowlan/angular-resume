'use strict';

/**
 * @ngdoc function
 * @name resume2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resume2App
 */
angular.module('resume2App')
  .controller('MainCtrl', function ($rootScope, $scope, $http) {
      $http({
        method: 'GET',
        url: 'data.json'
      }).success(function(data) {
        $scope.patrick = data; // This works
        //$scope.items = data.items; // Test, doesn't work.
      });
  });
