'use strict';

describe('Service: competitors', function () {

  // load the service's module
  beforeEach(module('technicalQualityApp'));

  // instantiate service
  var competitors;
  beforeEach(inject(function (_competitors_) {
    competitors = _competitors_;
  }));

  it('should do something', function () {
    expect(!!competitors).toBe(true);
  });

});
