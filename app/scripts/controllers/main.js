'use strict';

/**
 * @ngdoc function
 * @name technicalQualityApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the technicalQualityApp
 */
angular.module('technicalQualityApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
