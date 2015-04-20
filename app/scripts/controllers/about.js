'use strict';

/**
 * @ngdoc function
 * @name technicalQualityApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the technicalQualityApp
 */
angular.module('technicalQualityApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
