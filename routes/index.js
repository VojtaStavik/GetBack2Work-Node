var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
var azure = require('azure');
var service = azure.createNotificationHubService("main", "Endpoint=sb://getback2work.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=BwDJa/I66SKBW2vtBxRpHQ93cAiL+9PiDvmGTWMtWz4=");

var payload = {
  alert: "It's ready! Get back to work!",
  sound: "get-back-to-work.caf"
};


/* GET home page. */
router.post('/send', function(req, res, next) {
	
	req.checkBody('username', 'Userame cannot be empty').notEmpty();
	
	console.log(req.body);
	
	var valErrors = req.validationErrors();
  
 	if (valErrors) {
    
		var data = {
      		error: "InvalidRequest",
     	 	message: valErrors
    	};
    	
		res.status(400);
		return res.send(data);
  	}
	
	service.apns.send(req.body.username, payload, function (error) {		

	  if(error == null) {
		  res.status(200);
		  var data = { status:"sent"};
		  res.send(data);
		  
	  } else {
		  
	    res.status(400);
		res.send(error);
	  }
	});
});

module.exports = router;
