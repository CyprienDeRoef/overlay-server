let express = require('express')
var app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('User connected');

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

    socket.on('leftOne', (name) => {
        io.emit('leftOne', name);
        console.log(`Left player one name : ${name}`);
    });

    socket.on('leftTwo', (name) => {
        io.emit('leftTwo', name);
        console.log(`Left player two name : ${name}`);
    });

    socket.on('leftThree', (name) => {
        io.emit('leftThree', name);
        console.log(`Left player three name : ${name}`);
    });

    socket.on('leftFour', (name) => {
        io.emit('leftFour', name);
        console.log(`Left player four name : ${name}`);
    });

    socket.on('leftFive', (name) => {
        io.emit('leftFive', name);
        console.log(`Left player five name : ${name}`);
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

    socket.on('rightOne', (name) => {
        io.emit('rightOne', name);
        console.log(`Right player one name : ${name}`);
    });

    socket.on('rightTwo', (name) => {
        io.emit('rightTwo', name);
        console.log(`Right player two name : ${name}`);
    });

    socket.on('rightThree', (name) => {
        io.emit('rightThree', name);
        console.log(`Right player three name : ${name}`);
    });

    socket.on('rightFour', (name) => {
        io.emit('rightFour', name);
        console.log(`Right player four name : ${name}`);
    });

    socket.on('rightFive', (name) => {
        io.emit('rightFive', name);
        console.log(`Right player five name : ${name}`);
    });

    socket.on('leftPlayerOne', (champ, spellOne, spellTwo) => {
        io.emit('leftPlayerOne', { champ: champ, spellOne: spellOne, spellTwo: spellTwo });
        console.log(`Left player one :\r 
                    Champion : ${champ}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('leftPlayerTwo', (champ, spellOne, spellTwo) => {
        io.emit('leftPlayerTwo', { champ: champ, spellOne: spellOne, spellTwo: spellTwo });
        console.log(`Left player two :\r 
                    Champion : ${champ}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('leftPlayerThree', (champ, spellOne, spellTwo) => {
        io.emit('leftPlayerThree', { champ: champ, spellOne: spellOne, spellTwo: spellTwo });
        console.log(`Left player three :\r 
                    Champion : ${champ}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('leftPlayerFour', (champ, spellOne, spellTwo) => {
        io.emit('leftPlayerFour', { champ: champ, spellOne: spellOne, spellTwo: spellTwo });
        console.log(`Left player four :\r 
                    Champion : ${champ}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('leftPlayerFive', (champ, spellOne, spellTwo) => {
        io.emit('leftPlayerFive', { champ: champ, spellOne: spellOne, spellTwo: spellTwo });
        console.log(`Left player five :\r 
                    Champion : ${champ}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('rightPlayerOne', (champ, spellOne, spellTwo) => {
        io.emit('rightPlayerOne', { champ: champ, spellOne: spellOne, spellTwo: spellTwo });
        console.log(`Right player one :\r 
                    Champion : ${champ}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('rightPlayerTwo', (champ, spellOne, spellTwo) => {
        io.emit('rightPlayerTwo', { champ: champ, spellOne: spellOne, spellTwo: spellTwo });
        console.log(`Right player two :\r 
                    Champion : ${champ}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('rightPlayerThree', (champ, spellOne, spellTwo) => {
        io.emit('rightPlayerThree', { champ: champ, spellOne: spellOne, spellTwo: spellTwo });
        console.log(`Right player three :\r 
                    Champion : ${champ}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('rightPlayerFour', (champ, spellOne, spellTwo) => {
        io.emit('rightPlayerFour', { champ: champ, spellOne: spellOne, spellTwo: spellTwo });
        console.log(`Right player four :\r 
                    Champion : ${champ}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('rightPlayerFive', (champ, spellOne, spellTwo) => {
        io.emit('rightPlayerFive', { champ: champ, spellOne: spellOne, spellTwo: spellTwo });
        console.log(`Right player five :\r 
                    Champion : ${champ}\r
                    First spell : ${spellOne}\r
                    Second spell : ${spellTwo}\r`);
    });

    socket.on('leftBanOne', (champ) => {
        io.emit('leftBanOne', champ);
        console.log(`Left ban one :\r
                    Champion : ${champ}\r`);
    });

    socket.on('leftBanTwo', (champ) => {
        io.emit('leftBanTwo', champ);
        console.log(`Left ban two :\r
                    Champion : ${champ}\r`);
    });

    socket.on('leftBanThree', (champ) => {
        io.emit('leftBanThree', champ);
        console.log(`Left ban three :\r
                    Champion : ${champ}\r`);
    });

    socket.on('leftBanFour', (champ) => {
        io.emit('leftBanFour', champ);
        console.log(`Left ban four :\r
                    Champion : ${champ}\r`);
    });

    socket.on('leftBanFive', (champ) => {
        io.emit('leftBanFive', champ);
        console.log(`Left ban five :\r
                    Champion : ${champ}\r`);
    });

    socket.on('rightBanOne', (champ) => {
        io.emit('rightBanOne', champ);
        console.log(`Right ban one :\r
                    Champion : ${champ}\r`);
    });

    socket.on('rightBanTwo', (champ) => {
        io.emit('rightBanTwo', champ);
        console.log(`Right ban two :\r
                    Champion : ${champ}\r`);
    });

    socket.on('rightBanThree', (champ) => {
        io.emit('rightBanThree', champ);
        console.log(`Right ban three :\r
                    Champion : ${champ}\r`);
    });

    socket.on('rightBanFour', (champ) => {
        io.emit('rightBanFour', champ);
        console.log(`Right ban four :\r
                    Champion : ${champ}\r`);
    });

    socket.on('rightBanFive', (champ) => {
        io.emit('rightBanFive', champ);
        console.log(`Right ban five :\r
                    Champion : ${champ}\r`);
    });
});

server.listen(port, () => {
    console.log(`Started on port: ${port}\r`);
});