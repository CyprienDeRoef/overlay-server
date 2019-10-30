let express = require('express')
var app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('playerData', (side, number, champion, spellOne, spellTwo) => {
        io.emit('playerData', { side: side, number: number, champion: champion, spellOne: spellOne, spellTwo: spellTwo })
        console.log(`${side} player ${number} :\r 
                    Champion : ${champion}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('playerName', (side, number, name) => {
        io.emit('playerName', { side: side, number: number, name: name })
        console.log(`${side} player ${number} name : ${name}`)
    });

    socket.on('banData', (side, number, champion) => {
        io.emit('banData', { side: side, number: number, champion: champion })
        console.log(`${side} ban ${number} : ${champion}`)
    });

    socket.on('leftTeamName', (teamName) => {
        io.emit('leftTeamName', teamName);
        console.log(`Left team name : ${teamName}`);
    });

    socket.on('leftTeamColor', (color) => {
        io.emit('leftTeamColor', color);
        console.log(`Left team color : ${color}\r`);
    });

    socket.on('leftTeamScore', (score) => {
        io.emit('leftTeamScore', score);
        console.log(`Left team score : ${score}\r`);
    });

    socket.on('leftHorizontalPosition', (position) => {
        io.emit('leftHorizontalPosition', position);
        console.log(`Left team banner horizontal position : ${position}\r`);
    });

    socket.on('leftVerticalPosition', (position) => {
        io.emit('leftVerticalPosition', position);
        console.log(`Left team banner vertical position : ${position}\r`);
    });

    socket.on('rightTeamName', (teamName) => {
        io.emit('rightTeamName', teamName);
        console.log(`Right team name : ${teamName}`);
    });

    socket.on('rightTeamColor', (color) => {
        io.emit('rightTeamColor', color);
        console.log(`Right team color : ${color}\r`);
    });

    socket.on('rightTeamScore', (score) => {
        io.emit('rightTeamScore', score);
        console.log(`Right team score : ${score}\r`);
    });

    socket.on('rightHorizontalPosition', (position) => {
        io.emit('rightHorizontalPosition', position);
        console.log(`Right team banner horizontal position : ${position}\r`);
    });

    socket.on('rightVerticalPosition', (position) => {
        io.emit('rightVerticalPosition', position);
        console.log(`Right team banner vertical position : ${position}\r`);
    });
});

server.listen(port, () => {
    console.log(`Started on port: ${port}\r`);
});