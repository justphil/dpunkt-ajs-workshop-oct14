angular.module('dpunktApp').controller('bookDetailsCtrl', function($scope, $routeParams, bookDataService) {

  var isbn = $routeParams.isbn;

  bookDataService.getBookByIsbn(isbn).then(function(response) {
    $scope.book = response.data;
  }).catch(function(error) {
    console.log('An error occurred!', error);
  });

});