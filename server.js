var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var path = request.url
  var query = ''
  if (path.indexOf('?') >= 0) {
    query = path.substring(path.indexOf('?'))
  }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/





  console.log('得到 HTTP 路径\n' + path)
  if (path === '/index.html') {
    response.setHeader('Content-Type','text/html')
    response.write('<!DOCTYPE html><html lang="ZH-hans"><head><meta charset="UTF-8">'+
    '<link rel="stylesheet" href="style"></head>'+
    '<body><h1>你好</h1></body>'+
    '<script src="script"></script></html>')
    response.end()
  }else if(path === '/xxx'){
    response.statusCode = 200
    response.setHeader('Content-Type','text/json;charset=utf-8')
    response.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
    response.write(` {
      "note":{
        "to": "小谷",
        "from": "方方",
        "heading": "打招呼",
        "content": "hi"
      }
    }
`)
    response.end()
  } 
  if (path === '/style') {
    response.setHeader('Content-Type','text/css')
    response.write('body{background:#ddd}h1{color: red}')
    response.end()
  }
  if (path === '/script') {
    response.setHeader('Content-Type','text/javascript')
    response.write('alert("这是javascript控制的")')
    response.end()
  } else {
    response.statusCode = 404
    response.end()
  }



  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)