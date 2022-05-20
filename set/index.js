function mySet(){
    // the collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element){
        return collection.indexOf(element) !== -1;
    }
    // this method will return all the values in the set
    this.values = function(){
        return collection
    }
    // this method will add an element to the set
    this.add = function(element){
        if(this.has(element)) return;
        collection.push(element);
    }
    this.remove = function(element){
        if(!this.has(element)) return;
        index = collection.indexOf(element);
        collection.splice(index, 1);
    }

    this.size = function(){
        return collection.length
    }

    // this method will return the union of two sets
    this.union = function(otherSet){
        var unionSet = new Set()
        var firstSet = this.values()
        var secondSet = otherSet.values()
        firstSet.forEach((function(e){
            unionSet.add(e)
        }))
        secondSet.forEach((function(e){
            unionSet.add(e)
        }))
        return unionSet
    }
}