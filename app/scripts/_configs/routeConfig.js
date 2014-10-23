angular.module('dpunktApp').config(function($routeProvider) {
  $routeProvider.when('/books', {
    templateUrl: 'templates/routes/bookList.html',
    controller: 'bookListCtrl'
  }).when('/books/:isbn', {
    templateUrl: 'templates/routes/bookDetails.html',
    controller: 'bookDetailsCtrl'
  }).when('/newbook', {
    templateUrl: 'templates/routes/newBook.html',
    controller: 'newBookCtrl'
  }).otherwise({
    redirectTo: '/books'
  });

});