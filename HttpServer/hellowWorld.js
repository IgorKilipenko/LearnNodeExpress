const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '127.0.0.1';

http.createServer((req, res) =>{
    let i = 0;
    serverStaticFile(res, '/public/home.html', 'text/html');
}).listen(port, hostname, () => {
    console.log(`Сервер запущен http://${hostname}:${port}/. Нажмите Ctr+C для остановки`);
});

function serverStaticFile(res, path, contentType, responseCode) {
    if (!responseCode)
        responseCode = 200;
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'ContentType': 'text/plain' });
            res.end('500 - Internal error');
        } else {
            res.writeHead(responseCode, { 'ContentType': contentType });
            res.end(data);
        }
    })
}