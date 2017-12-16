var express = require("express");
var path = require("path");
var friends = require("../data/friends.js");

var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(request, response, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the home page route
router
	.get('/friends', function(request, response) {
  		response.send(friends);
	})

	.post("/friends", function(request, response) {
  //response.sendFile(path.join(__dirname,"../public","survey.html"));
  		console.log(request.body);
  		friends.push(request.body);
  		//  /app/public/app/data/friends 
	});
//\app\routing\app\public\survey.html'
//app\routing\survey.html
module.exports = router;