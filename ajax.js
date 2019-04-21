window.jQuery = function(nodeOrSelector){
  let nodes = []
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}

window.jQuery.ajax = function({url,method,setHeader,body}){
  return new Promise(function(resolve,reject){
    let request = new XMLHttpRequest()
    request.open(method,url)
    for(let key in setHeader){
      let value = setHeader[key]
      request.setRequestHeader(key,value)
    }
    request.send(body)
    request.onreadystatechange=()=>{
      if(request.readyState === 4){
        console.log('请求响应都结束了')
        if(request.status >= 200 && request.status < 300){
          resolve.call(undefined,request.responseText)
        }else if(request.status >= 400){
          reject.call(undefined,request)
      }
    }
  }
  })
}
button.addEventListener('click',(e)=>{
  window.jQuery.ajax({
    url:'/xxx',
    method:'post',
    setHeader:{
      'Content-Type':'Application/x-www-form-urlencoded'
    },
    body:'这是请求的第四部分'
  }).then(
    (responseText)=>{console.log(responseText)},
    ()=>{console.log('error')}
  )
})
