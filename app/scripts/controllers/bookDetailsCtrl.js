angular.module('dpunktApp').controller('bookDetailsCtrl', function($scope) {

  $scope.book = {
    title: 'AngularJS',
    subtitle: 'Eine Einführung in das JS-Framework',
    author: 'pt, rb',
    isbn: '123-456-789',
    numPages: 360
  };

});