window.node2 = function(node){
  return {
    getSiblings:function () {
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
    },
    addClasses: function (classes){
      for(let key in classes){
        let value = classes[key]
        let methodName = value?'add':'remove'
        node.classList[methodName](key)
      }
      }
      
      //abc为class名字，布尔值控制是否添加
  }
}
var node2 = node2(item3)
console.log(node2.getSiblings.call(node2))
node2.addClasses.call(node2,{a:true,b:true,c:false})