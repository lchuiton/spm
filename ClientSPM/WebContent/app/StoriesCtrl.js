var app = angular.module('spm', ['spm.persistance.entrepotStories']);

app.controller('StoriesCtrl', ['$scope', 'entrepotStories', function($scope, entrepotStories) {
	
	$scope.stories = entrepotStories.recupererStories();
 
}]);