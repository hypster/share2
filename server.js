const StaticServer = require('static-server')
const server = new StaticServer({
    rootPath: './dist',
    port: 8888
})
server.start(() => {
    console.log('start listening on 8888')
})
// const server = http.createServer((req, res) => {
//     require('fs').readFile(__dirname, 'dist/index.html', (err, file) => {
//         if (err) throw err
//         res.setHeader('content-type', 'text/html')
//         res.sendFile(file)
//     })
// })
// server.listen(8888, () => {
//     console.log('start listening on 8888')
// })