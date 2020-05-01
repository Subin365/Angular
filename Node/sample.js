var fs = require("fs");
var http = require("http");
// Below function reads a file from local storage and uses setTimeout and setImmediate
fs.readFile('input.txt', function (err, data) {//call-back function
    if (err) return console.error(err); {
        console.log(data.toString());
        setTimeout(() => {
            console.log('setTimeout function has been executed');
            console.log(this.data);
        }, 0);
        setImmediate(() => {
            console.log('setImmediate function has been executed');
        });
    }
});
console.log("The program has ended");
// below function creates http response
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end("Hello World");
}).listen(8080);

console.log('server running at http://127.0.0.8080');