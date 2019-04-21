button.addEventListener('click',function(){
  let request = new XMLHttpRequest()
  request.open('get','http://localhost:8888/xxx')
  request.send()
  request.onreadystatechange=()=>{
    if(request.readyState === 4){
      console.log('请求响应都结束了')
      if(request.status >= 200 && request.status < 300){
        console.log('请求成功')
      }else if(request.status >= 400){
        console.log('请求失败')
      }
    }
  }
})
