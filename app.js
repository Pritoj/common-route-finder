var child_process = require('child_process');
var http = require('http');


//create a server

var express = require('express');

var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', function (req, res) {
  //get request to server
  if(!(req.body.source1 && req.body.source2 && req.body.dest1 && req.body.dest2)){
    //if something is missing
    res.json({'err':1,'msg':'Bad data'});
  }
  else{
    var routeFinder = child_process.fork('./common-route-finder');
    routeFinder.on('message', function(m) {
      // Receive results from child process
      res.json(m);
      console.log('sent for', req.body)
      routeFinder.kill();
    });
    console.log('finding for', req.body);
    routeFinder.send([req.body.source1,req.body.source2,req.body.dest1,req.body.dest2]);
  }

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

