'use strict';

describe('Controller: DeductionsCtrl', function () {

  // load the controller's module
  beforeEach(module('technicalQualityApp'));

  var DeductionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeductionsCtrl = $controller('DeductionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
