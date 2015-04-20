'use strict';

describe('Service: ruleSet', function () {

  // load the service's module
  beforeEach(module('technicalQualityApp'));

  // instantiate service
  var ruleSet;
  beforeEach(inject(function (_ruleSet_) {
    ruleSet = _ruleSet_;
  }));

  it('should do something', function () {
    expect(!!ruleSet).toBe(true);
  });

});
