angular.module('dpunktApp').controller('newBookCtrl', function($scope) {
  $scope.saveBook = function(book) {
    console.log('Saving book...', book);
  }
});