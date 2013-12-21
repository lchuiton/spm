angular.module('spm.persistance.entrepotStories', [])
	.factory('entrepotStories', function(){
		return {
			recupererStories : function() {
				return [{
					'numero' : 10,
					'theme' : 'un theme',
					'besoin' : 'un besoin',
					'criteres' : 'des criteres',
					'estimation' : 3
				  }];
			}
		};
});