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
    $scope.categories = ruleSet.getCategories();
    $scope.newCompetitorCategory = $scope.categories[0];

    $scope.remove = function removeCompetitor(competitor){
        competitors.remove(competitor.id);
    }
    $scope.add = function addCompetitor(){
        competitors.add({
            name: $scope.newCompetitorName,
            surnames: $scope.newCompetitorSurnames,
            category: $scope.newCompetitorCategory
        });
        resetNewCompetitor();
    };
    $scope.performance = function performance(competitor){
        var categoryId = competitor.category.value;
        $location.path("/execution/"+ categoryId +"/"+ competitor.id);
    }

  });
