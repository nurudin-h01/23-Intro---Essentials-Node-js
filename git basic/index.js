const http = require('http')
const port = 8000


http.createServer((req,res)=>{
    switch(req.url){
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Welcome to about us page')
            res.end()
            break
        case '/contact':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Welcome to contact us page')
            res.end()
            break
        default:
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello World!')
            res.end()
    }
}).listen(port)