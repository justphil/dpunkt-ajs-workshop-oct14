'use strict';

describe('Service: bookDataService', function() {

  var bookDataService, $httpBackend;

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
    $httpBackend.when('POST', baseUrl + '/books').respond({});
    $httpBackend.when('DELETE', baseUrl + '/books/' + isbn).respond({});
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

      $httpBackend.expectPOST(baseUrl + '/books', bookToStore);
      bookDataService.saveBook(bookToStore);
      $httpBackend.flush();
    });
  });

  describe('deleteBookByIsbn(isbn)', function() {
    it('should properly delete the book with the passed isbn', function() {
      $httpBackend.expectDELETE(baseUrl + '/books/' + isbn);
      bookDataService.deleteBookByIsbn(isbn);
      $httpBackend.flush();
    });
  });
});