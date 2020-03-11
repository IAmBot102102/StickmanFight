const https = require("https");
const fs = require("fs");
const WebSocket = require("ws");
console.log("Started");
const wss = new WebSocket.Server({port: 3030});

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`);
        wss.clients.forEach(function(client){
            if(client.readyState == WebSocket.OPEN){
                client.send(message);
            }
        });
    });
    ws.send('Hello! Message From Server!!');
});
