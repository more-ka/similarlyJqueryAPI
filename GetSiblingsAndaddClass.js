window.node2 = function(nodeOrSelector) {
  let nodes = {}
  if (typeof(nodeOrSelector) === 'string') {
    let temp = document.querySelectorAll(nodeOrSelector)
    for (let i = 0; i < temp.length; i++) {
      nodes[i] = temp[i]
    }
    nodes.length = temp.length
  } else if (nodeOrSelector instanceof node) {
    nodes = {
      0: nodeOrSelector,
      length: 1
    }
  }
  nodes.addClasses = function(classes) {
    classes.forEach((value) => {
        for (let i = 0; i < nodes.length; i++) {
          nodes[i].classList.add(value)
        }
      })
      //abc为class名字，布尔值控制是否添加
  }
  nodes.text = function(text) {
    if (text === undefined) {
      let texts = []
      for (let i = 0; i < nodes.length; i++) {
        texts.push(nodes[i].textContent)
      }
      return texts
    } else {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].textContent = text
      }
    }
  }
  return nodes
}

var node2 = node2('ul>li')

console.log(node2.text())