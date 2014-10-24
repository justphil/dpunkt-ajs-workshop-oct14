angular.module('dpunktApp').controller('bookListCtrl', function($scope, bookDataService) {


  $scope.dateTime = new Date();


  function loadBookList() {
    bookDataService.getBooks().then(function(response) {
      $scope.books = response.data;
    }).catch(function(error) {
      console.log('An error occurred!', error);
    });
  }

  loadBookList();


  $scope.deleteBook = function(book) {
    console.log('Deleting book...', book);
    $scope.dialogVisible = true;
    $scope.dialogTitle = 'Löschen?';
    $scope.bookToDelete = book;
  };

  $scope.cancelDeletion = function() {
    $scope.dialogVisible = false;
    delete $scope.dialogTitle;
    delete $scope.bookToDelete;
  };

  $scope.performDeletion = function() {
    bookDataService.deleteBookByIsbn($scope.bookToDelete.isbn).then(function(response) {
      if (response.data) {
        return true;
      }
      else {
        throw new Error('Book could not be deleted!');
      }
    }).then(loadBookList)
      .then($scope.cancelDeletion);
  };

});