angular.module('dpunktApp').config(function(bookDataServiceProvider) {
  bookDataServiceProvider.setBaseUrl('http://ajs-workshop.herokuapp.de/api');
});