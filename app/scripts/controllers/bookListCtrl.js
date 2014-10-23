angular.module('dpunktApp').controller('bookListCtrl', function($scope) {

  $scope.books = [
    {
      title: 'AngularJS',
      subtitle: 'Eine Einführung in das JS-Framework',
      author: 'pt, rb',
      isbn: '123-456-789',
      numPages: 360
    },
    {
      title: 'JavaScript Effektiv',
      subtitle: 'Effektives JS',
      author: 'foo',
      isbn: '111-222-333',
      numPages: 250
    },
    {
      title: 'TypeScript',
      subtitle: 'Ein netter Versuch von Microsoft',
      author: 'bar',
      isbn: '222-222-222',
      numPages: 400
    }
  ];

});