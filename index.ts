let express = require('express')
var app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('start', () => {
        io.emit('start');
    })

    socket.on('playerData', (side, number, player) => {
        io.emit('playerData', { side: side, number: number }, JSON.stringify(player))
        console.log(`${side} player ${number} :\r 
                    Champion : ${player.champion}\r
                    First spell : ${player.spellOne}\r
                    Second spell : ${player.spellTwo}\r`);
    });

    socket.on('data', (left, right) => {
        io.emit('data', JSON.stringify(left), JSON.stringify(right));
    })

    socket.on('playerName', (side, number, name) => {
        io.emit('playerName', { side: side, number: number, name: name })
        console.log(`${side} player ${number} name : ${name}`)
    });

    socket.on('banData', (side, number, ban) => {
        io.emit('banData', { side: side, number: number }, JSON.stringify(ban))
        console.log(`${side} ban ${number} : ${ban.champion}`)
    });
});

server.listen(port, () => {
    console.log(`Started on port: ${port}\r`);
});