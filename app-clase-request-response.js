const http = require('http');

http.createServer((request, response) => {

    response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    response.writeHead(200, { 'Content-Type': 'application/csv' });

    response.write('id; nombre\n');
    response.write('1; Miguel\n');
    response.write('2; Angel\n');
    response.write('3; Pamela\n');
    response.write('4; Gissel\n');
    response.end();
})
    .listen(8080)

console.log('Escuchando el puerto', 8080);