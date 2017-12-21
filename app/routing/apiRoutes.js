var express = require("express");
var path = require("path");
var friends = require("../data/friends.js");

var router = express.Router();

var difference = function (a, b) { return Math.abs(a - b); }

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

      var nerdCount = friends.length;
      var matchId;
      var minDifference = 100;
      for(i=0;i<nerdCount-1;i++){
         
         
         var currentDifference = 0;
         var questionCount = friends[0].scores.length;
         for (y=0;y<questionCount;y++){
            var clientScores = request.body.scores;
            var fieldScores = friends[i].scores; 
            currentDifference += difference(clientScores[y],fieldScores[y]);
         }
         if (currentDifference < minDifference){
           matchId = i;
           minDifference  = currentDifference ;
         }


      }

      response.send(friends[matchId]);
  		//  /app/public/app/data/friends 
	});
//\app\routing\app\public\survey.html'
//app\routing\survey.html
module.exports = router;

