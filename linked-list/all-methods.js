function Node(n) {
	this.value = n;
	this.next = null;
}
function LinkedList() {
  this.first = null;
	this.last = null;
}

LinkedList.prototype.addFirst = function (num){
  const current = this.first
   const newnode= new Node(num)
  if(!current) { 
    this.first = newnode
    this.last = newnode
  }else{
    const previousFirst = this.first
    this.first = newnode
    this.first.next = previousFirst
  } 
}

LinkedList.prototype.addLast = function (num){
  let newnode = new Node(num)
  if(this.first===null){
    this.first=newnode
    this.last=newnode
    return;
  }
	let current = this.first
  while(current.next !== null){
     current = current.next
  }
  
  current.next = newnode
  this.last = newnode
}

LinkedList.prototype.toString = function (){
	let arr = []
  let current = this.first
  while(current !== null){
    arr.push(current.value)
    current = current.next
  }
  return `[${arr.join(', ')}]`
}

LinkedList.prototype.deleteFirst = function(){
	const previousFirst = this.first
  this.first = previousFirst.next
}

LinkedList.prototype.deleteLast = function(){
  let current = this.first
  while(current.next !== this.last){
    current = current.next
  }
  const previousLast = current
  previousLast.next=null
  this.last= previousLast
}

LinkedList.prototype.contains = function(num){
	let current = this.first
  while(current !== null){
    if(current.value === num) return true
    current= current.next
  }
  return false
}
LinkedList.prototype.indexOf = function(num){
	let current = this.first
  let index= 0
  while(current !== null){
    if(current.value === num) return index
    current= current.next
    index +=1
  }
  return -1
}

var actual = new LinkedList();
actual.addLast(10);
actual.addLast(20);
actual.addFirst(5);
actual.addLast(30);
actual.deleteLast();
actual.toString()
actual.deleteFirst()
actual.contains(10)
actual.toString()