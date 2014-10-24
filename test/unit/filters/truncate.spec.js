'use strict';


describe('Filter: truncate', function() {
  var $filter, truncate;

  beforeEach(module('dpunktApp'));

  beforeEach(inject(function(_$filter_) {
    $filter = _$filter_;
    truncate = $filter('truncate');
  }));

  it('should properly truncate an input string after the specified chars', function() {
    var s = '123456789';
    expect(truncate(s, 3)).toBe('123...');
  });

});