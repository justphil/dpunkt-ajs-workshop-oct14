angular.module('dpunktApp').factory('dataEnhancer', function () {
  function enhance(book) {
    book.foo = 'bar';
  }

  return {
    enhance: enhance
  };
});