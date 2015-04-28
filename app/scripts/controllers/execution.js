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
        var cathegory = $routeParams.cathegory;
        var competitorId = $routeParams.competitorId;
        $scope.score = 5.00;
        $scope.cathegoryDescription = ruleSet.getCathegory(cathegory);
        $scope.competitor = competitors.get(competitorId) || {'name' : '- Unkown -'};
        $scope.cathegoryDescription = ruleSet.getCathegory(cathegory);
        $scope.commit = function commitAndReturn(){
            $scope.competitor.score = $scope.score;
            $location.path("/");
        }
        $scope.deductions = ruleSet.getDeductions(cathegory);
  });
