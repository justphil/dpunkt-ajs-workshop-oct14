angular.module('dpunktApp').config(function($routeProvider) {
  $routeProvider.when('/books', {
    templateUrl: 'templates/routes/bookList.html',
    controller: 'bookListCtrl'
  }).when('/books/:isbn', {
    templateUrl: 'templates/routes/bookDetails.html',
    controller: 'bookDetailsCtrl'
  }).otherwise({
    redirectTo: '/books'
  });

});