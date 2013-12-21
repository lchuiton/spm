'use strict';

describe('Le controlleur de stories template', function() {
  var UNE_STORY = {
    'numero' : 123,
    'theme' : 'un theme',
    'besoin' : 'un besoin',
    'criteres' : 'des criteres',
    'estimation' : 3
  };
  var STORIES = [UNE_STORY]; 
	
  var $rootScope = null;
  var $compile = null;
  var entrepot = null;
  //var ctrl = null;
  
  //you need to indicate your module in a test
  beforeEach(module('spm'));

  beforeEach(inject(function(_$rootScope_, $controller, _$compile_) {
	$compile = _$compile_;
	$rootScope = _$rootScope_;	
	
    entrepot = jasmine.createSpyObj('entrepot', ['recupererStories']);
    entrepot.recupererStories.andCallFake(function() {
        return STORIES;
    });
	
	var ctrl = $controller('StoriesCtrl', {
      '$scope': $rootScope.$new(), 
      'entrepotStories': entrepot
    });
	
	module(function($provide) {
        $provide.controller('StoriesCtrl', {
		  '$scope': $rootScope.$new(), 
		  'entrepotStories': entrepot
		});
    });
    
  
    
  }));
  
  it('doit afficher la story', function() {
	
	var element = $compile('<div data-ng-controller="StoriesCtrl"><ul><li data-ng-repeat="story in stories"><span>{{story.numero}}</span></li></ul></div>')($rootScope);
	// fire all the watches, so the scope expression {{1 + 1}} will be evaluated
	$rootScope.$digest();
	// Check that the compiled element contains the templated content
	expect(element.html()).toContain(UNE_STORY.numero);
		
  });
  
});