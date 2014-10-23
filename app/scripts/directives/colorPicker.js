angular.module('dpunktApp').directive('colorPicker', function() {

  // Directive Definition Object
  return {
    restrict: 'E', // element
    templateUrl: 'templates/directives/colorPicker.html',
    scope: {
      // controlled connections
      onChange: '&',
      onBlur: '&'
    }, // isolated scope
    link: function(scope, element) {
      ['r', 'g', 'b'].forEach(function(c) {
        scope.$watch(c, function() {
          scope.onChange({
            r: scope.r,
            g: scope.g,
            b: scope.b
          });
        });
      });


    }
  };

});