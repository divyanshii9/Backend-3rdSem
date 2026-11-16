const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <html>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    `);
});

server.listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
});