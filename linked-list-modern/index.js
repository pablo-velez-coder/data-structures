class Node{
    constructor(val){
      this.val = val
      this.next = null
    }
  }
  
  class LinkedList{
    constructor(){
      this.head = null
    }
    append(val){
      if(this.head === null){
       this.head = new Node(val)
        return;
      }
      let current = this.head
      while(current.next !== null){ 
        current = current.next                  
      }
      current.next = new Node(val)
    }
    
    print(){
      let current = this.head
      let str = ''
      while(current!== null){
          str += current.val + (current.next ? ' -> ' : '')
          current = current.next
      }
      console.log(str)
    }
    
    contains(target){
      let current = this.head
      while(current !== null){
          if(current.val === target) return true
        current = current.next
      }
      return false
    }
    deleteValue(target){
      if(this.head.val === target) {
        return this.head.next.val
      }
      let prev = null  
      let current = this.head
      while(current !== null){
        if(current.val === target){
          prev.next= current.next
        }
        prev = current
        current = current.next
      }
      return head.val
    }
    
    reverse(){
      let prev =null
      let current = this.head
      
      while(current !== null){
        const next = current.next
        current.next = prev
        
        prev = current
        current= next
      }
     
    }
  }
  
  const list = new LinkedList()
  list.append('a')
  list.append('b')
  list.append('c')
  list.append('d')
  //a -> b
  
  list.reverse()
  list.print()

  
  
  