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
        var cathegorie = $routeParams.cathegorie;
        var competitorId = $routeParams.competitorId;
        $scope.cathegorieDescription = ruleSet.getCathegorie(cathegorie);
        $scope.competitor = competitors.get(competitorId);
        $scope.cathegorieDescription = ruleSet.getCathegorie(cathegorie);
        $scope.commit = function commitAndReturn(){
            $scope.competitor.score = 5.00;
            $location.path("/");
        }
  });
