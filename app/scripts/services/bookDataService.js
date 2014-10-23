angular.module('dpunktApp').factory('bookDataService', function($q) {

  var books = [
    {
      title: 'AngularJS',
      subtitle: 'Eine Einführung in das JS-Framework',
      author: 'pt, rb',
      isbn: '123-456-789',
      numPages: 360
    },
    {
      title: 'JavaScript Effektiv',
      subtitle: 'Effektives JS',
      author: 'foo',
      isbn: '111-222-333',
      numPages: 250
    },
    {
      title: 'TypeScript',
      subtitle: 'Ein netter Versuch von Microsoft',
      author: 'bar',
      isbn: '222-222-222',
      numPages: 400
    }
  ];

  // private implementation
  function getBooks() {
    return $q.when({
      data: angular.copy(books)
    });
  }

  function getBookByIsbn(isbn) {
    var book = null;

    var tmpArray = books.filter(function(b) {
      return isbn === b.isbn;
    });

    if (tmpArray.length > 0) {
      book = angular.copy(tmpArray[0]);
    }

    return $q.when({
      data: book
    });
  }

  // revealing module
  return {
    getBooks: getBooks,
    getBookByIsbn: getBookByIsbn
  };

});