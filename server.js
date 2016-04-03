var express = require('express'),
	app 	= express();  

var bodyParser = require('body-parser');
var Uber = require('uber-api')({server_token:'pUtKJq06Q_TlgDiQpVTFealpwZ33Q2iDcNO1lg6D',version:'v1'});

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

app.use(allowCrossDomain);

app.use(express.static(__dirname + '/public'));




/*app.~Uber.*/

/*Calc price*/
app.post('/calc', function(req, res){
	console.log('==========>',req.body);

	Uber.getPriceEstimate(req.body, function (err, data) {
		if (err) console.error(err);
		else console.log(data);
		return res.json({err:err, data:data});
	});
	
});

app.listen(3000, function(){
	console.log("Server is runinng on port 3000");
}); 