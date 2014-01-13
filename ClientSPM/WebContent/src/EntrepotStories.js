angular.module('spm.persistance.entrepotStories', ['ngResource'])
	.factory('entrepotStories', [ '$resource',  function($resource){
		return {
			recupererStories : function() {
				var stories = $resource('http://localhost:3000/backlog/');
				return stories.query();
			}
		};
}]);