// http module require
var http = require('http');
//define port we want to listen to
var PORT = 8080;

// function to handle requests and send response
function handleRequest (request, response) {
	response.end('We made it everyone! This was your URL: ' + request.url);

}
//create a server
var server = http.createServer(handleRequest);
// start the server
server.listen(PORT, function () {
//callback is triggered
	console.log('Server listening on port', PORT);
});
-----------------------------------------------------
// http module require
var http = require('http');
//define port we want to listen to
var PORT = 7000;
function handleRequest (request. response) {
	response.end('You are happy today!: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(7000, function() {
	console.log
})


Instructions
Using the previous example as a guide, create an app that has two web servers.
One that listens on port 7000 and one that listens on port 7500.
The one listening on port 7000 will always tell the user something good about themselves.
The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code!
** Bonus **
Generate the good / bad phrase randomly from a list of predefined phrases
Use the twitter package inside the response to also return a random tweet!

