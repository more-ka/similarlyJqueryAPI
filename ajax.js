window.jQuery = function(nodeOrSelector){
  let nodes = []
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}

window.jQuery.ajax = function({url,method,body,successFn,failFn}){
  let request = new XMLHttpRequest()
  request.open(method,url)
  request.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
  request.send(body)
  request.onreadystatechange=()=>{
    if(request.readyState === 4){
      console.log('请求响应都结束了')
      if(request.status >= 200 && request.status < 300){
        successFn.call(undefined,request.responseText)
      }else if(request.status >= 400){
        failFn.call(undefined,request)
    }
  }
}}
button.addEventListener('click',(e)=>{
  window.jQuery.ajax({
    url:'http://localhost:8888/xxx',
    method:'post',
    body:'这是请求的第四部分',
    successFn:(responseText)=>{console.log(responseText)},
    failFn:(request)=>{console.log(request)}
  })
})
