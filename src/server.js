import http from 'http'

const server = http.createServer();
server.on('listening',() => { console.log('estou no ar')})
server.listen(3000)
