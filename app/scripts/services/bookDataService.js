angular.module('dpunktApp').factory('bookDataService', function() {

  // private implementation
  function getBooks() {
    return [];
  }

  // revealing module
  return {
    getBooks: getBooks
  };

});