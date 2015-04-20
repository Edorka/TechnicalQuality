'use strict';

describe('Controller: ExecutionCtrl', function () {

  // load the controller's module
  beforeEach(module('technicalQualityApp'));

  var ExecutionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExecutionCtrl = $controller('ExecutionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
