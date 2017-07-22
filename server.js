var express = require('express');
var app = express();

var port = process.env.PORT || 8000;

app.use(express.static('assets'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/index.html" );
})

var server = app.listen(port, function () {
   var host = server.address().address
   //var port = server.address().port

   console.log("Vue Example listening at http://%s:%s", host, port)
})
