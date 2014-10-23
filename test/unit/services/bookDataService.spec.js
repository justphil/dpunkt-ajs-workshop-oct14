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

    it('should contain a getBookByIsbn() API function', function() {
      expect(angular.isFunction(bookDataService.getBookByIsbn)).toBe(true);
    });

    it('should contain a saveBook() API function', function() {
      expect(angular.isFunction(bookDataService.saveBook)).toBe(true);
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

  describe('getBookByIsbn(isbn)', function() {
    it('should return an appropriate book object by isbn', function() {
      var book;
      var isbn = '123-456-789';

      bookDataService.getBookByIsbn(isbn).then(function(response) {
        book = response.data;
      });

      // synchronous resolution of pending promises
      $rootScope.$apply();

      expect(isBookObject(book)).toBe(true);
      expect(book.isbn).toBe(isbn);
    });
  });

  describe('saveBook(book)', function() {
    it('should properly store a new book object', function() {
      var bookToStore = {
        isbn: 'test'
      };

      var bookSaved = false;

      bookDataService.saveBook(bookToStore).then(function(response) {
        bookSaved = response.data;
      });

      $rootScope.$apply();

      var book;
      bookDataService.getBookByIsbn(bookToStore.isbn).then(function(response) {
        book = response.data;
      });

      $rootScope.$apply();

      expect(bookSaved).toBe(true);
      expect(book.isbn).toBe(bookToStore.isbn);
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