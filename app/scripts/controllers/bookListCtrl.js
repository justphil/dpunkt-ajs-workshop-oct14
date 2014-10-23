angular.module('dpunktApp').controller('bookListCtrl', function($scope, bookDataService) {

  bookDataService.getBooks().then(function(response) {
    $scope.books = response.data;
  }).catch(function(error) {
    console.log('An error occurred!', error);
  });

});