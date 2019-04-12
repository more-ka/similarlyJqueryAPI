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