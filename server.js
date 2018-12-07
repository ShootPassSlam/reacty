const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const program = require('commander');

program
    .version('0.1.0')
    .option('-t, --thousand', 'One thousand records at one thousand a second')
    .parse(process.argv);
    
if (program.thousand){
    console.log("Will feed one thousand records at one thousand a second");
    var NUM_ITEMS = 1000;
    var MESSAGES_PER_SECOND = 1000;
}else{
    console.log("Will feed one hundred records at one hundred a second");
    var NUM_ITEMS = 100;
    var MESSAGES_PER_SECOND = 100;
}

const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

function callHandlerEveryN(handler, durationMs) {
    var pendingTimeout = null;

    (function helper() {
        const startTime = Date.now();
        handler();
        pendingTimeout = setTimeout(helper, Math.max(0, durationMs + startTime - Date.now()));
    })();

    return function destroy() {
        clearTimeout(pendingTimeout);
    };
}

var names = ["MARY","PATRICIA","LINDA","BARBARA","ELIZABETH","JENNIFER","MARIA","SUSAN","MARGARET","DOROTHY","LISA","NANCY","KAREN","BETTY","HELEN","SANDRA","DONNA","CAROL","RUTH","SHARON","MICHELLE","LAURA","SARAH","KIMBERLY","DEBORAH","JESSICA","SHIRLEY","CYNTHIA","ANGELA","MELISSA","BRENDA","AMY","ANNA","REBECCA","VIRGINIA","KATHLEEN","PAMELA","MARTHA","DEBRA","AMANDA","STEPHANIE","CAROLYN","CHRISTINE","MARIE","JANET","CATHERINE","FRANCES","ANN","JOYCE","DIANE","ALICE","JULIE","HEATHER","TERESA","DORIS","GLORIA","EVELYN","JEAN","CHERYL","MILDRED","JAMES","JOHN","ROBERT","MICHAEL","WILLIAM","DAVID","RICHARD","CHARLES","JOSEPH","THOMAS","CHRISTOPHER","DANIEL","PAUL","MARK","DONALD","GEORGE","KENNETH","STEVEN","EDWARD","BRIAN","RONALD","ANTHONY","KEVIN","JASON","MATTHEW","GARY","TIMOTHY","JOSE","LARRY","JEFFREY","FRANK","SCOTT","ERIC","STEPHEN","ANDREW","RAYMOND","GREGORY","JOSHUA","JERRY","DENNIS","WALTER","PATRICK","PETER","HAROLD","DOUGLAS","HENRY","CARL","ARTHUR","RYAN","ROGER","JOE","JUAN","JACK","ALBERT","JONATHAN"];
function createRandomName() {
    return names[Math.floor(Math.random() * names.length)] + ' ' + names[Math.floor(Math.random() * names.length)];
}

wss.on('connection', function(ws) {
    var destroy;
    
    ws.on('message', function(message) {
        if (message === 'init') {
            destroy = callHandlerEveryN(function() {
                if (ws.readyState === 1){
                    ws.send(JSON.stringify({
                        id: Math.floor(Math.random() * NUM_ITEMS),
                        value: Math.floor(Math.random() * NUM_ITEMS),
                        name: createRandomName()
                    }));
                }
            }, (1000 / MESSAGES_PER_SECOND));
        }
    });

    ws.on('close', function() {
        if (destroy) {
            destroy();
            destroy = null;
        }
    });
});

server.listen(7770, function() {
  console.log('Listening on %d', server.address().port);
});
