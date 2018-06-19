var request = require("request");

var base_url = 'https://react-elvinsamuel.c9users.io:8081';

describe("Hello World Server", function() {
	describe("GET /", function() {
		it("returns status code 200", function() {
			request.get(base_url, function(error, response, body){
				expect(response.statusCode).toBe(200);
				// 'done()' callback is only available in Jasmine-Node,
				// NOT in basic Jasmine
				done();
			});
		});

		it("returns Hello World", function(done) {
			request.get(base_url, function(error, response, body){
				expect(body).toBe("Hello World");
				done();
			});
		});
	});
});
