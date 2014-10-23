angular.module('dpunktApp').controller('colorPickerCtrl', function($scope) {

  $scope.onColorChange = function(r, g, b) {
    console.log('Color has changed', r, g, b);
  };


  $scope.onSliderBlur = function() {
    console.log('slider blurred!');
  };

});