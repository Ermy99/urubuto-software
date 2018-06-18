var request = require("request");

request("https://urubuto.herokuapp.com/users/number", function(error,response,body) {
	console.log(body);
})

// request("https://urubuto.herokuapp.com/schools", function(error,response,body) {
// 	console.log(body);
// })

