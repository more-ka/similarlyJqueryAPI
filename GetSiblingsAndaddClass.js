function addClasses(node,classes){
  for(let key in classes){
    let value = classes[key]
    let methodName = value?'add':'remove'
    node.classList[methodName](key)
  }
  }
  addClasses(item2,{a:true,b:true,c:false})
  
  //abc为class名字，布尔值控制是否添加
  function getSiblings(node) {
    let allChildren = node.parentNode.children
    let array = {
      length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
      if (allChildren[i] !== node) {
        array[array.length] = allChildren[i]
        array.length += 1
      }
    }
    return array
  }
  console.log(getSiblings(item2))