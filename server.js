var express = require('express');
var app = express();

/* Elastic Search */
var elasticsearch = require('elasticsearch');

var connectionString = process.env.SEARCHBOX_URL;

var client = new elasticsearch.Client({
    host: connectionString
});

/*
client.index({
  index: 'sample',
  type: 'document',
  id: '1',
  body: {
          name: 'Reliability',
          text: 'Reliability is improved if multiple redundant sites are used, which makes well-designed cloud computing suitable for business continuity.'
  }
}, function (error, response) {
  console.log(response);
});

client.search({
        index: 'sample',
        type: 'document',
        body: {
            query: {
                query_string:{
                   query:"Reliability"
                }
            }
        }
    }).then(function (resp) {
        console.log(resp);
    }, function (err) {
        console.log(err.message);
    });
*/

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
