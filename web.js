var express = require('express');
var app = express();

var newBaseURL = process.env.NEW_BASE_URL || 'http://www.example.com';
var newRootURL = process.env.NEW_ROOT_URL || 'http://example.com';
var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
var port = process.env.PORT || 5000;

app.get('/rel', function(request, response) {
  // response.redirect(redirectStatus, newBaseURL + request.url);
  response.redirect(redirectStatus, newBaseURL);
});

app.get('*', function (request, response) {
  response.redirect(redirectStatus, newRootURL);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
