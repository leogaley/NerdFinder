var express = require("express");
var nerds = require("../data/nerds.js");//require nerds module, which is pre-populated with a few records

var router = express.Router();

//get difference between two numbers
var getDifference = function (number1,number2) { 
    return Math.abs(number1 - number2); 
};

//get difference between values within two arrays.  
var getArrayTotalDifference = function(array1,array2){
  var totalDifference = 0;
  for (var i=0;i<array1.length;i++){
    totalDifference += getDifference(array1[i],array2[i]);
  }
  return totalDifference;
}

//Middle ware that is specific to this router
router.use(function timeLog(request, response, next) {
  console.log('Time (apiRoutes) :', Date.now());//just time stamping as things pass through
  next();//move on to other routes
});


// Define nerds route
router
	.get('/nerds', function(request, response) {
  		response.send(nerds);//return array of objects
	})

	.post("/nerds", function(request, response) {
  		nerds.push(request.body);//push new person into nerds cache

      var nerdCount = nerds.length;
      var matchId;
      var minDifference = 100;//just needs to be above 40, which is max difference
      for(var i=0;i<nerdCount-1;i++){
         
        var clientScores = request.body.scores;//new nerd posted from client
        var fieldScores = nerds[i].scores; //scores for a specific nerd during iterations
        var currentTotalDifference = getArrayTotalDifference(clientScores,fieldScores);
        
        //always try to set best match to lowest difference
        if (currentTotalDifference < minDifference){
           matchId = i;
           minDifference = currentTotalDifference ;
        }
      }
      response.send(nerds[matchId]);
  
	});

module.exports = router;

