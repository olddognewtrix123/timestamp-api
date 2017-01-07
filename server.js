//Example usage:
//https://timestamp-ms.herokuapp.com/December%2015,%202015
//https://timestamp-ms.herokuapp.com/1450137600
//Example output:
//{ "unix": 1450137600, "natural": "December 15, 2015" }

var express = require ('express');
var app = express();
var moment = require('moment');
var http = require('http').Server(app);
var path = require('path');
var port = process.env.PORT || 8080;

app.set('port', (process.env.PORT || 5000));// code from fcc post https://forum.freecodecamp.com/t/solved-need-heroku-help-have-read-other-threads-git-to-heroku-not-working/46737/2

app.get('/:samIam', function(req, res) {

  var amIaNum = Number(req.params.samIam);
  
  if(isNaN(amIaNum)){
     var dateData = new Date(req.params.samIam);
  }
  else{
     var dateData = new Date(req.params.samIam*1000);
  }
  
  var testMe = dateData.toString();
  
  if(testMe === "Invalid Date"){
    res.json({'unix':null,'natural':null});
  }
else{
  
  var dateNatural = moment(dateData).format("MMMM Do, YYYY");
    var dateUnix = moment.unix(dateData);
    res.json({
      "unix date": dateUnix/1000000, "natural date": dateNatural
    })
  
}

  console.log(dateData);
})

//http.listen(port, function() {
//  console.log('We are listening on *:' + port);
//})

app.listen(app.get('port'), function() {  // code from fcc post https://forum.freecodecamp.com/t/solved-need-heroku-help-have-read-other-threads-git-to-heroku-not-working/46737/2
  console.log('Node app is running on port', app.get('port'));
});





















//app.get('/', function (req, res) {
//  res.send('Hello World!')
//})

//app.listen(8080, function () {
//  console.log('Example app listening on port 8080!')
//})