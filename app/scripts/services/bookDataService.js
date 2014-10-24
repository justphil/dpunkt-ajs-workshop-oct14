angular.module('dpunktApp').factory('bookDataService', function($q, $http) {

  var baseUrl = 'http://ajs-workshop.herokuapp.com/api';

  // private implementation
  function getBooks() {
    return $http.get(baseUrl + '/books');
  }

  function getBookByIsbn(isbn) {
    var book = null;

    var tmpArray = books.filter(function(b) {
      return isbn === b.isbn;
    });

    if (tmpArray.length > 0) {
      book = angular.copy(tmpArray[0]);
      dataEnhancer.enhance(book);
    }

    return $q.when({
      data: book
    });
  }

  function saveBook(book) {
    books.push(book);

    return $q.when({
      data: true
    });
  }

  function deleteBookByIsbn(isbn) {
    var deleted = false;

    var i = books.length;
    while (i--) {
      if (books[i].isbn === isbn) {
        books.splice(i, 1);
        deleted = true;
        break;
      }
    }

    return $q.when({
      data: deleted
    });
  }

  // revealing module
  return {
    getBooks: getBooks,
    getBookByIsbn: getBookByIsbn,
    saveBook: saveBook,
    deleteBookByIsbn: deleteBookByIsbn
  };

});