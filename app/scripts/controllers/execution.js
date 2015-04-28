'use strict';

/**
 * @ngdoc function
 * @name technicalQualityApp.controller:ExecutionCtrl
 * @description
 * # ExecutionCtrl
 * Controller of the technicalQualityApp
 */
angular.module('technicalQualityApp')
  .controller('ExecutionCtrl', function ($scope, $location, $routeParams, ruleSet, competitors) {
        var category = $routeParams.category;
        var competitorId = $routeParams.competitorId;
        $scope.score = 5.00;
        $scope.competitor = competitors.get(competitorId) || {'name' : '- Unkown -'};
        $scope.categoryDescription = ruleSet.getCategory(category);
        $scope.commit = function commitAndReturn(){
            $scope.competitor.score = $scope.score;
            $location.path("/");
        }
        $scope.deductions = ruleSet.getDeductions(category);
  });
