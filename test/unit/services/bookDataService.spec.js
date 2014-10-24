'use strict';

describe('Service: bookDataService', function() {

  var bookDataService, $rootScope, $httpBackend;

  var baseUrl = 'http://ajs-workshop.herokuapp.com/api';
  var isbn = '123-456-789';

  beforeEach(module('dpunktApp'));

  beforeEach(inject(function(_$httpBackend_, _bookDataService_) {
    $httpBackend = _$httpBackend_;
    bookDataService = _bookDataService_;
  }));

  beforeEach(function() {
    $httpBackend.when('GET', baseUrl + '/books').respond({});
    $httpBackend.when('GET', baseUrl + '/books/' + isbn).respond({});
  });

  // ensure that there are no outstanding expectation and requests
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


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

    it('should contain a deleteBookByIsbn(isbn) API function', function() {
      expect(angular.isFunction(bookDataService.deleteBookByIsbn)).toBe(true);
    });
  });

  describe('getBooks()', function() {
    it('should perform the corresponding GET request', function() {
      $httpBackend.expectGET(baseUrl + '/books');
      bookDataService.getBooks();
      $httpBackend.flush();
    });
  });

  describe('getBookByIsbn(isbn)', function() {
    it('should return an appropriate book object by isbn', function() {
      $httpBackend.expectGET(baseUrl + '/books/' + isbn);
      bookDataService.getBookByIsbn(isbn);
      $httpBackend.flush();
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

  describe('deleteBookByIsbn(isbn)', function() {
    it('should properly delete the book with the passed isbn', function() {
      var isbnToDelete = '123-456-789';
      var bookAvailable, bookCountBefore, bookCountAfter, bookDeleted;

      bookAvailable = isBookAvailable(isbnToDelete);
      expect(bookAvailable).toBe(true);

      bookCountBefore = getBookCount();

      bookDataService.deleteBookByIsbn(isbnToDelete).then(function(response) {
        bookDeleted = response.data;
      });
      $rootScope.$apply();

      bookAvailable = isBookAvailable(isbnToDelete);
      expect(bookAvailable).toBe(false);

      bookCountAfter = getBookCount();

      expect(bookDeleted).toBe(true);
      expect(bookCountAfter).toBe(bookCountBefore - 1);
    });
  });

  function isBookObject(book) {
    return angular.isDefined(book)
                    && book.hasOwnProperty('test')
                    && book.test === 'test'
                    && book.hasOwnProperty('title')
                    && book.hasOwnProperty('subtitle')
                    && book.hasOwnProperty('isbn')
                    && book.hasOwnProperty('author')
                    && book.hasOwnProperty('numPages');
  }

  function getBookCount() {
    var bookCount;

    bookDataService.getBooks().then(function(response) {
      bookCount = response.data.length;
    });
    $rootScope.$apply();

    return bookCount;
  }

  function isBookAvailable(isbn) {
    var bookAvailable = false;

    bookDataService.getBookByIsbn(isbn).then(function(response) {
      if (response.data) {
        bookAvailable = true;
      }
    });
    $rootScope.$apply();

    return bookAvailable;
  }
});