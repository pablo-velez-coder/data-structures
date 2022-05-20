//Stacks
// Collections of items
// add to top of stack (push)
// remove top of stack (pop)
// Last in- First out (LIFO)
// Usefol for tracking a history of steps
// browser history, backtracking algorithms

//Implementing using an array
//const myStack = []
//myStack.push('a')
//myStack.push('b')
//console.log(myStack)
//myStack.pop()
//console.log(myStack)

class StackNode {
    constructor(val){
      this.val = val
      this.next = null
    }
  }
  
  class Stack{
    constructor(){
      this.top = null
      this.size = 0
    }
    
  
    push(val){
      const newNode = new StackNode(val)
     if(this.size === 0){
        this.top = newNode
     }else{
       newNode.next = this.top
       this.top = newNode
     }
     this.size++
    }
    getTop(){
      return this.top.val
    }
    
    pop(){
      if(this.size===0) return null
      const deletedNode = this.top
      this.top = this.top.next
      this.size--
      return deletedNode.val
    }
  }
  
  //myStack = new Stack()
  //myStack.push('a')
  //myStack.push('b')
  //myStack.push('c')
  //console.log(myStack)
  //myStack.pop()
  //console.log(myStack)
  
  function BracketMatcher(str){
    const stack = []
    for(let i=0; i<str.length;i++){
      if(str[i]==='('){
        stack.push(str[i])
      }
       if(str[i]===')'){
        if(stack.length===0) return 0
         stack.pop()
      }
    }
    
    return stack.length===0 ? 1 : 0
  }
  
  console.log(BracketMatcher('(coder)(byte)'))
 