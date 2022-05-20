class Node{
    constructor(val){
      this.val = val
      this.left = null
      this.right = null
    }
    
  }
  
  const a = new Node(3)
  const b = new Node(2)
  const c = new Node(7)
  const d = new Node(4)
  const e = new Node(-2)
  const f = new Node(5)
  
  a.left = b
  a.right = c
  b.left = d
  b.right = e
  c.right = f
  
  const breadFirstPrint = root => {
      const queue = [root]
      while(queue.length>0){
        const curr = queue.shift()
        console.log(curr.val)
        curr.left && queue.push(curr.left)
        curr.right && queue.push(curr.right)       
      }
  }
  
  const bfs  = (root,target) => {
      const queue = [root]
      while(queue.length>0){
        
        const curr = queue.shift()
        if(curr.val === target){
            return true
        }
        console.log(curr.val)
        curr.left && queue.push(curr.left)
        curr.right && queue.push(curr.right)       
      }
    return false
  }
  
  const sumTree = root => {
      const queue = [root]
      let sum = 0
      while(queue.length>0){
        const curr = queue.shift()
        sum += curr.val
        curr.left && queue.push(curr.left)
        curr.right && queue.push(curr.right)       
      }
    return sum
  }
  
  const depthFirstPrint = root => {
    const stack = [ root ]
    while (stack.length > 0 ) {
      const current = stack.pop()
      console.log(current.val)
      current.right && stack.push(current.right)
      current.left && stack.push(current.left)
    } 
  }
  const depthFirstSum = root => {
    const stack = [ root ]
    let sum = 0
    while (stack.length > 0 ) {
      const current = stack.pop()
      sum += current.val
      current.right && stack.push(current.right)
      current.left && stack.push(current.left)
    } 
    return sum
  }
  
  const depthFirstRecursive = root =>{
    if(root===null) return
    console.log(root.val)
    depthFirstRecursive(root.left)
    depthFirstRecursive(root.right)
  }
  
  const depthFirstRecursiveSum = root =>{
    if(root===null) return 0
    return depthFirstRecursiveSum(root.left) + root.val
    depthFirstRecursiveSum(root.right)
  }
  
  depthFirstRecursiveSum(a)