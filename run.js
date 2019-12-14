//https://github.com/tapio/live-server#readme

var liveServer = require("live-server");
var fs = require('fs');

var params = {
	file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
	wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
	logLevel: 0, // 0 = errors only, 1 = some, 2 = lots
	middleware: [function(req, res, next) {
        //trap all the request to /new-website/*  
        if (req.url.startsWith("/new-website")) {
            //serve the new-website
            fs.readFile("./new-website/default.html", function (err,data) {
                if (err) {
                  res.writeHead(404);
                  res.end(JSON.stringify(err));
                  return;
                }
                res.writeHead(200);
                res.end(data);
              });
        }
        else {
            next();
        } 
    }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);