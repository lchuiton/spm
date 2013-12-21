describe('Le controlleur de stories', function() {
  var UNE_STORY = {
    'numero' : 123,
    'theme' : 'un theme',
    'besoin' : 'un besoin',
    'criteres' : 'des criteres',
    'estimation' : 3
  };
  var STORIES = [UNE_STORY]; 
	
  var $scope = null;
  var entrepot = null;
  
  //you need to indicate your module in a test
  beforeEach(module('spm'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
	
    entrepot = jasmine.createSpyObj('entrepot', ['recupererStories']);
    entrepot.recupererStories.andCallFake(function() {
        return STORIES;
    });
    
    var ctrl = $controller('StoriesCtrl', {
      '$scope': $scope, 
      'entrepotStories': entrepot
    });
    
  }));
  
  it('doit démarrer avec une liste récupérée de l\'entrepot', function() {
	  expect(entrepot.recupererStories).toHaveBeenCalled();
	  expect($scope.stories).toEqual(STORIES);
  });
  
  it('doit contenir des stories complètes', function() {
	  var story = $scope.stories[0];
	  
	  expect(story.numero).toBeDefined();
	  expect(story.theme).toBeDefined();
	  expect(story.besoin).toBeDefined();
	  expect(story.criteres).toBeDefined();
	  expect(story.estimation).toBeDefined();
  });
  
});