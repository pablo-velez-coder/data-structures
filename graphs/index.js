// graphs
//depth first traversal

// const depthFirstPrint = (graph,source)=>{
//   const stack=[source]
  
//   while(stack.length>0){
//     const current = stack.pop()
//     console.log(current)
//     for(let neighbor of graph[current]){
//       stack.push(neighbor)
//     }
//   }
// }
const depthFirstPrint = (graph,source)=>{
    console.log(source)
    for(let neighbor of graph[source]){
      depthFirstPrint(graph,neighbor)
    }
  }
  
  const breadthFirstPrint = (graph,source)=>{
    const queue = [source]
    while(queue.length>0){
      const current = queue.shift()
      console.log(current)
      for(let neighbor of graph[current]){
        queue.push(neighbor)
      }
    }
  }
  
    // const graph = {
    //   a:['c','b'],
    //   b:['d'],
    //   c:['e'],
    //   d:['f'],
    //   e:[],
    //   f:[]
    // }
  
  // const hasPath = (graph,src,dst)=>{
  //   if(src===dst) return true
  //  for(let neighbor of graph[src]){
  //    if(hasPath(graph,neighbor, dst)===true){
  //      return true
  //    }
  //  }
  //   return false
  // }
  
  const hasPath =(graph,src,dst)=>{
    const queue = [src]
    
    while(queue.length>0){
      const current = queue.shift()
      if(current=== dst) return true
      for(let neighbor of graph[current]){
        queue.push(neighbor)
      }
    }
    return false
  }
  
    const graph = {
      f:['g','i'],
      g:['h'],
      h:[],
      i:['g','k'],
      j:['i'],
      k:[]
    }
    
  hasPath(graph,'f','k') // true