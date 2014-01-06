var express = require('express');
 
var app = express();

var backlog = [
               {numeroUS:1, contenuUS:'ETQ Dev, je veux des US dans mon gui'},
               {numeroUS:2, contenuUS:'ETQ Dev, je veux faire des tests sur NodeJS'}
               ];
 
app.get('/backlog', function(req, res) {
    res.json(backlog);
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
console.log('Listeningerooooiiiiuuuu on port 3000...');
