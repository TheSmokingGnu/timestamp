// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:timestamp", function (request, response) {
  let date;
  if(isNaN(request.params.timestamp)) {
    date = new Date(request.params.timestamp);
  } else {
    date = new Date(parseInt(request.params.timestamp) * 1000);
  }
  
  if(isNaN(date.getTime())) {
    response.send({
      unix: null,
      string: null
    })
  } else {
    response.send({
      unix: date.getTime(),
      string: date.toDateString()
    })
  }
  
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
