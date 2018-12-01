const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:7770');

ws.on('open', function open() {
    ws.send('init');
});

ws.on('message', function incoming(data) {
    var message = null;
    try {
        message = JSON.parse(data);
    } catch(e) {
        console.log('malformed message');
    }
    if (message) {
        console.log(JSON.stringify(message));
    }
});
