angular.module('dpunktApp').directive('colorPicker', function() {

  // Directive Definition Object
  return {
    restrict: 'E', // element
    templateUrl: 'templates/directives/colorPicker.html',
    scope: {
      // controlled connections
      r: '@initR',
      g: '@initG',
      b: '@initB'
    } // isolated scope
  };

});