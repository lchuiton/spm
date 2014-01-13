var express = require('express');
 
var app = express();

var backlog = [
               {
						"numero" : 2, 
						"theme" : "un theme",
						"besoin" : "un besoin",
						"criteres" : "des criteres",
						"estimation" : 10,
						"ordre" : 1
					},
					{
						"numero" : 1, 
						"theme" : "un tgheme",
						"besoin" : "un jbesoin",
						"criteres" : "deghjs criteres",
						"estimation" : 5,
						"ordre" : 2
					},
					{
						"numero" : 5, 
						"theme" : "un tgheme",
						"besoin" : "un jbesoin",
						"criteres" : "deghjs criteres",
						"estimation" : 8,
						"ordre" : 3
					},
					{
						"numero" : 13, 
						"theme" : "un tgheme",
						"besoin" : "un jbesoin",
						"criteres" : "deghjs criteres",
						"estimation" : 20,
						"ordre" : 4
					}

               ];
 // Retourne un JSON qui contient les US du Backlog priorisées
app.get('/backlog', function(req, res) {
	arr = trierTableauParPriorite(backlog);
	res.json(arr);
});


// Modifie la priorité d'une US et "décale" la priorisation des autres US si besoin
app.post('/backlog/:id/position', function(position) {
	rechercheSiUSExiste(req.params.id);
	
	var position = getUS(req.params.id).ordre;
	var numeroUsPrecedente = position.avant ;
	var numeroUsSuivante = position.apres ;
	

});

// Affiche une US en particulier

app.get('/backlog/:id', function(req, res) {
	rechercheSiUSExiste(req.params.id) ;
	
	var us = getUS(req.params.id);

	if(us != null) {
		res.json(us);
	} else {
		res.statusCode = 404;
	    return res.send('Error 404: No story found in backlog');
	}
});

 
app.listen(3000);

console.log('Listening on port 3000...');

var getUS = function(numUS) {
	var indexDuBacklog = 0;

	while (indexDuBacklog < backlog.length) {

		if(backlog[indexDuBacklog].numero ==numUS) {

			var us = backlog[indexDuBacklog];
			return us;
 		}
		indexDuBacklog++;
	}


}

var trierTableauParPriorite = function(tableau){
		return tableau.sort(function(a,b) {
 		a.ordre> b.ordre;
 		});


};

var rechercheSiUSExiste = function(id) {
	if(id < 0) {
	    res.statusCode = 404;
	    return res.send('Error 404: No story found in backlog');
	}
}

