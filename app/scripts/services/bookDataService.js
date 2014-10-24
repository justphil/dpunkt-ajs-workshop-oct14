angular.module('dpunktApp').provider('bookDataService', function() {

  var baseUrl = 'http://localhost:8080/api';

  // configuration function
  this.setBaseUrl = function(_baseUrl) {
    baseUrl = _baseUrl;
  };

  this.$get = function($http) {
    // private implementation
    function getBooks() {
      return $http.get(baseUrl + '/books');
    }

    function getBookByIsbn(isbn) {
      return $http.get(baseUrl + '/books/' + isbn);
    }

    function saveBook(book) {
      return $http.post(baseUrl + '/books', book);
    }

    function deleteBookByIsbn(isbn) {
      return $http.delete(baseUrl + '/books/' + isbn);
    }

    // revealing module
    return {
      getBooks: getBooks,
      getBookByIsbn: getBookByIsbn,
      saveBook: saveBook,
      deleteBookByIsbn: deleteBookByIsbn
    };
  };
});