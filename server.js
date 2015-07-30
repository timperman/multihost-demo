var redis = require("redis"),
	http = require("http");


var client = redis.createClient(6379, "demo_redis_1", {});

var server = http.createServer(function(request, response) {
	client.get('counter', function(err, reply) {
		var counter = (reply == null) ? 0 : parseInt(reply);
		client.set('counter', '' + (counter + 1));
		response.end('Counter: ' + counter);
	});
});

server.listen(3000);