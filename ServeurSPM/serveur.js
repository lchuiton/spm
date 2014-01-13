var express = require('express');
 
var app = express();

var backlog = [
               {numeroUS:1, contenuUS:'ETQ Dev, je veux des US dans mon gui', numeroPriorisation:1},
               {numeroUS:2, contenuUS:'ETQ Dev, je veux faire des tests sur NodeJS', numeroPriorisation:2}
               ];
 // Retourne un JSON qui contient les US du Backlog priorisées
app.get('/backlog', function(req, res) {
	arr = trierTableauParPriorite(backlog);
	res.json(arr);
});

// Modifie la priorité d'une US et "décale" la priorisation des autres US si besoin
app.post('/backlog/:id/position', function(position) {
	rechercheSiUSExiste(req.params.id);
	
	var position = getUS(req.params.id).numeroPriorisation;
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

		if(backlog[indexDuBacklog].numeroUS ==numUS) {

			var us = backlog[indexDuBacklog];
			return us;
 		}
		indexDuBacklog++;
	}


}

var trierTableauParPriorite = function(tableau){
		return tableau.sort(function(a,b) {
 		a.numeroPriorisation > b.numeroPriorisation;
 		});


};

var rechercheSiUSExiste = function(id) {
	if(id < 0) {
	    res.statusCode = 404;
	    return res.send('Error 404: No story found in backlog');
	}
}