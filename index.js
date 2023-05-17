const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((req, res)=>{
    let parseURL = url.parse(req.url,true);
    let qsObject = parseURL.query
    res.end('bullshit')
    console.log(qsObject)
})
server.listen(8000,()=>{
    console.log('server listening on localhost:8000')
})