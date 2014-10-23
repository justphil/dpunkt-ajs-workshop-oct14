'use strict';

describe('Service: bookDataService', function() {

  var bookDataService, $rootScope;

  beforeEach(module('dpunktApp'));

  beforeEach(inject(function(_$rootScope_, _bookDataService_) {
    $rootScope = _$rootScope_;
    bookDataService = _bookDataService_;
  }));


  describe('Duck Typing', function() {
    it('should contain a getBooks() API function', function() {
      expect(angular.isFunction(bookDataService.getBooks)).toBe(true);
    });
  });

  describe('getBooks()', function() {
    var books;

    beforeEach(function() {
      bookDataService.getBooks().then(function(response) {
        books = response.data;
      });

      // synchronous resolution of pending promises
      $rootScope.$apply();
    });

    it('should return an array', function() {
      expect(angular.isArray(books)).toBe(true);
    });

    it('should return an array of book objects', function() {
      books.forEach(function(b) {
        expect(isBookObject(b)).toBe(true);
      });
    });
  });

  function isBookObject(book) {
    return angular.isDefined(book)
                    && book.hasOwnProperty('title')
                    && book.hasOwnProperty('subtitle')
                    && book.hasOwnProperty('isbn')
                    && book.hasOwnProperty('author')
                    && book.hasOwnProperty('numPages');
  }
});