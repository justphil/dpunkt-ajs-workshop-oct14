angular.module('dpunktApp').controller('newBookCtrl', function($scope, $location, bookDataService) {

  $scope.saveBook = function(book) {
    bookDataService.saveBook(book).then(function(response) {
      if (response.data) {
        $location.path('/books');
      }
      else {
        throw new Error('Book could not be saved!');
      }
    }).catch(function(error) {
      console.log('An error occurred!', error);
    });
  };

});