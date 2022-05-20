//Queue

//collections of items
// add to ack of queue(enqueue) and remove front of queue(dequeue)
// First in, first out (FIFO)
// [    ]
// F.   B
//const queue = []  Unefficent way to do a queue
//queue.push('a')
//queue.push('b')
//queue.push('c')
//console.log(queue)
//queue.shift()
//console.log(queue)

class QueueNode{
  constructor(val){
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor(){
    this.front = null
    this.back = null
    this.size = 0
  }
  
  enqueue(val){
    if(this.size === 0){
      const newNode =  new QueueNode(val)
      this.front =newNode
      this.back = newNode
      
    }else{
      const newNode = new QueueNode(val)
      this.back.next = newNode
      this.back = newNode
    }
    this.size++
  }
  
  dequeue(){
    if(this.size===0)return null
    if(this.size === 1) this.back = null
    const removedNode = this.front
    this.front = this.front.next
    this.size--
    return removedNode
  }
}

// a -> b -> c
// F.        B
const myQueue = new Queue()

myQueue.enqueue('a')
myQueue.enqueue('b')
myQueue.enqueue('c')
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)









