var express = require("express");
var path = require("path");

var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(request, response, next) {
  console.log('Time (htmlRoutes): ', Date.now());//just time stamping as things pass through
  next();
});


// Define the home page route
router.get('/', function(request, response) {
  response.sendFile(path.join(__dirname,"../public","home.html"));
});

router.get("/survey", function(request, response) {
  response.sendFile(path.join(__dirname,"../public","survey.html"));
  
});
//\app\routing\app\public\survey.html'
//app\routing\survey.html
module.exports = router;