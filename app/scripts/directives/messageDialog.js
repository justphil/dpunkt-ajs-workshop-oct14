angular.module('dpunktApp').directive('messageDialog', function () {

  return {
    restrict: 'E',
    templateUrl: 'templates/directives/messageDialog.html',
    scope: {
      visible: '=',
      title: '=',
      onYes: '&',
      onNo: '&'
    },
    transclude: true
  };

});