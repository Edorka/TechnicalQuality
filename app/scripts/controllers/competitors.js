'use strict';

/**
 * @ngdoc function
 * @name technicalQualityApp.controller:CompetitorsCtrl
 * @description
 * # CompetitorsCtrl
 * Controller of the technicalQualityApp
 */
angular.module('technicalQualityApp')
  .controller('CompetitorsCtrl', function ($scope, $location, competitors, ruleSet) {

    var resetNewCompetitor = function(){
        $scope.newCompetitorName = '';
        $scope.newCompetitorSurnames = '';
    }
    resetNewCompetitor();
    $scope.competitors = competitors.list();
    $scope.cathegories = ruleSet.getCathegories();
    $scope.newCompetitorCathegorie = $scope.cathegories[0];


    $scope.remove = function removeCompetitor(competitor){
        competitors.remove(competitor.id);
    }
    $scope.add = function addCompetitor(){
        competitors.add({
            name: $scope.newCompetitorName,
            surnames: $scope.newCompetitorSurnames,
            cathegorie: $scope.newCompetitorCathegorie
        });
        resetNewCompetitor();
    };
    $scope.performance = function performance(competitor){
        var cathegorieId = competitor.cathegorie.value;
        $location.path("/execution/"+ cathegorieId +"/"+ competitor.id);
    }

  });
