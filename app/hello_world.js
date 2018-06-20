var express = require('express'),
    app     = express();

app.get("/", function(req, res){
	var number = req.params.number;
	var helloWorldArray = generator.generateHelloWorlds(number);

	res.send(200, helloWorldArray);
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Hello World Server Listening on ${process.env.PORT}`);
});
