var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));//set to true to handle arrays
app.use(bodyParser.json());

//traffic control

var htmlRouter = require('./app/routing/htmlRoutes.js');
var apiRouter = require('./app/routing/apiRoutes.js');
app.use('/',htmlRouter);//send to this router for this endpoint
app.use('/api',apiRouter);//send to this router for this endpoint



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
