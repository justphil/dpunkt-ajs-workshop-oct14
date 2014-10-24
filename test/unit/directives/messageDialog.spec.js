'use strict';

describe('Directive: messageDialog', function() {

  var $compile, $rootScope;

  var template = '<message-dialog visible="dialogVisible"' +
                    'title="dialogTitle"' +
                    'on-yes="performDeletion()"' +
                    'on-no="cancelDeletion()">' +
                      'Wollen Sie das Buch <b>{{ bookToDelete.title }}</b> wirklich löschen?' +
                 '</message-dialog>';

  beforeEach(module('dpunktApp'));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should properly render the passed title', function() {
    var parentScope = $rootScope.$new();
    parentScope.dialogTitle = 'test-title';

    var linkFn = $compile(template);
    var element = linkFn(parentScope);
    parentScope.$apply();

    expect(element.find('.title').text()).toBe('TEST-TITLE');
  });

  it('should get an own scope', function() {
    var parentScope = $rootScope.$new();
    var element = $compile(template)(parentScope);
    parentScope.$apply();

    var directiveScope = getDirectiveScope(element);
    expect(directiveScope.$id).not.toBe(parentScope.$id);
  });

  it('should get an isolated scope', function() {
    var parentScope = $rootScope.$new();
    var element = $compile(template)(parentScope);
    parentScope.$apply();
  });

  function getDirectiveScope(element) {
    return angular.element(element.children()[0]).scope();
  }

});