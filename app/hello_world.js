var express = require('express'),
    app     = express();

app.get("/", function(req, res){
	res.send("Hello World");
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`Hello World Server Listening on ${process.env.PORT}`);
});
