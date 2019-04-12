function addClasses(node,classes){
  for(let key in classes){
    let value = classes[key]
    console.log(value)
    if(value){
      node.classList.add(key)
    }else{
      node.classList.remove(key)
    }
  }
  }
  addClasses(item2,{a:true,b:true,c:false})
  
  //abc为class名字，布尔值控制是否添加