angular.module('dpunktApp').filter('truncate', function() {

  return function(s, charCount) {
    var output = s;

    if (output.length > charCount) {
      output = output.substr(0, charCount) + '...';
    }

    return output;
  };

});