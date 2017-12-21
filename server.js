var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
//var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var htmlRouter = require('./app/routing/htmlRoutes.js');
var apiRouter = require('./app/routing/apiRoutes.js');
app.use('/app/public',htmlRouter);
app.use('/app/data',apiRouter);
// app.get("/app/public/survey", function(request, response) {
//   response.sendFile(path.join(__dirname, "app/public/survey.html"));
// });


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
