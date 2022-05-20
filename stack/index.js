/* var letters  = [];

var word = 'racecar'

var rword = ''

for(var i=0; i<word.length; i++){
    letters.push(word[i])
}

for(var i=0;i<word.length; i++){
    rword += letters.pop()
}

if(rword === word){
    console.log(word + ' is a palindrome')
} else{
    console.log('Not a palindrome')
} */

/*Stack */
var Stack = function(){
    this.count = 0;
    this.storage = {}

    //Adds a value onto the end of the stack
    this.push =  function(value){
        this.storage[this.count] = value
        this.count++
    }
    // Removes and returns the value at the end of the Stack
    this.pop = function(){
        if (this.count === 0) return undefined

        this.count--
        var result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }
    this.size = function(){
        return this.count
    }
    //returns the value at the end of the Stack
    this.peek = function(){
        return this.storage[this.count-1]
    }
}

var myStack = new Stack();

myStack.push(1)
myStack.push(2)
console.log(myStack.pop())
console.log(myStack.storage)

