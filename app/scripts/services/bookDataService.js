angular.module('dpunktApp').factory('bookDataService', function($q, dataEnhancer) {

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
    var booksCopy = angular.copy(books);

    booksCopy.forEach(function(b) {
      dataEnhancer.enhance(b);
    });

    return $q.when({
      data: booksCopy
    });
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