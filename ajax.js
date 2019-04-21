button.addEventListener('click',()=>{
  let request = new XMLHttpRequest()
  request.open('post','http://localhost:8888/xxx')
  request.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
  request.send('请求的第四部分')
  request.onreadystatechange=()=>{
    if(request.readyState === 4){
      console.log('请求响应都结束了')
      if(request.status >= 200 && request.status < 300){
        console.log('请求成功')
        console.log(request.status)
      }else if(request.status >= 400){
        console.log('请求失败')
      }
    }
  }
})
