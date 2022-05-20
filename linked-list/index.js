class Node {
    constructor(val){
        this.val =  val;
        this.next= null
    }
}

const a = new Node(1)
const b = new Node(5)
const c = new Node(7)
const d = new Node(6)

a.next = b
b.next = c
c.next = d

///A -> B -> C -> D -> NULL

const printLinkedList = (head) =>{
    const values = []
    let current= head;
    while (current!==null){
        values.push(current.val)
        current = current.next
    }
    console.log(values)
    return values
}
const sumLinkedList = (head) =>{
    let sum = 0
    let current= head;
    while (current!==null){
        sum += current.val
        current = current.next
    }
    console.log(sum)
    return sum
}

const linkedListFind = (head,target) =>{
    let current= head
    while(current!==null){
        if(current.val==target){
            return true
        }
    }
    return false
}

const getNodeValue = (head,index) =>{
    let current = head
    let idx = 0
    while(current!==null){
        if(idx=== index){
            return current.val
        }
        current = current.next
        idx += 1 
    }
    return null
}

const reverseLinkedList = (head) =>{
    let prev =  null
    let current = head
    while (current!==null){
        const next = current.next
        prev = current
        current = next
        current.next = prev
    }
    return prev
}

reverseLinkedList(a)

//Recursive way
/* const printLinkedList = (head) =>{
    const values = []
    fillValues(head,values)
    return values
}

const fillValues = (head,values) =>{
    if(head===null) return
    values.push(head.val)
    fillValues(head.next,values)
}

// sum recursion
const sumList = head => {
    if(head===null) return
    return head.val + sumList(head.next)
}
const linkedListFind = (head,target) =>{
    if(head=== null) return false;
    if(head.val === target) return true
  return  linkedListFind(head.next,target);

}
 */
/* printLinkedList(a) */
