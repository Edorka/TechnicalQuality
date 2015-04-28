'use strict';

/**
 * @ngdoc overview
 * @name technicalQualityApp
 * @description
 * # technicalQualityApp
 *
 * Main module of the application.
 */
angular
  .module('technicalQualityApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/competitors.html',
        controller: 'CompetitorsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/execution/:category/:competitorId', {
        templateUrl: 'views/execution.html',
        controller: 'ExecutionCtrl'
      })
      .when('/summary/:category/:competitorId', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
