'use strict';

describe('Directive: deductionType', function () {

  // load the directive's module
  beforeEach(module('technicalQualityApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<deduction-type></deduction-type>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the deductionType directive');
  }));
});
