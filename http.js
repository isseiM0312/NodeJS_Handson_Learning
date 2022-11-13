const todos = [
    { id: 1, title: 'ネーム', conmleted: false },
    { id: 2, title: '下書き', completed: true }
]

var http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/api/todos') {
        if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/josn')
            return res.end(JSON.stringify(todos))
        }
        res.statusCode = 405
    } else {
        res.statusCode = 404
    }
    res.end()
}).listen(3000)