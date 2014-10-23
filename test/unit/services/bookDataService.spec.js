'use strict';

describe('Service: bookDataService', function() {

  var bookDataService;

  beforeEach(module('dpunktApp'));

  beforeEach(inject(function(_bookDataService_) {
    bookDataService = _bookDataService_;
  }));


  describe('Duck Typing', function() {
    it('should contain a getBooks() API function', function() {
      expect(angular.isFunction(bookDataService.getBooks)).toBe(true);
    });
  });

  describe('getBooks()', function() {
    it('should return an array', function() {
      expect(angular.isArray(bookDataService.getBooks())).toBe(true);
    });

    it('should return an array of book objects', function() {

    });
  });


});