angular.module('dpunktApp').config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/routes/bookList.html',
    controller: 'bookListCtrl'
  });
});