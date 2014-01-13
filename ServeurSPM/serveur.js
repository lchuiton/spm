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
 
app.get('/backlog', function(req, res) {
    res.json(backlog);
});

app.get('/test', function(req, res) {
    res.json([{"nom":"vincent"}]);
});

app.get('/backlog/:id', function(req, res) {
	if(backlog.length <= req.params.id || req.params.id < 0) {
	    res.statusCode = 404;
	    return res.send('Error 404: No story found in backlog');
	}
	
	var us = backlog[req.params.id];
    res.json(us);
});
 
app.listen(3000);
console.log('Listening on port 3000...');