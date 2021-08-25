let a = [1, 2, 3]

function callbackNewForEach(element, indice, array) {
    return undefined
}
Array.prototype.newForEach = function(callback){
    for (let i = 0;  i < this.length; i++){
        callback(this[i], i, this);
    }
}

a.newForEach(callbackNewForEach)



function callbackNewFill(i, array, change, start, end) {
    if (start !== undefined){
        if (end !== undefined){
            if (i >= start && i < end){
                array[i] = change
            }
        } else {
            if (i >= start){
                array[i] = change
            }
        }
    } else{
        array[i] = change
    }
}

Array.prototype.newFill = function(change, start, end) {
    
    for (let i = 0; i < this.length; i++){
        callbackNewFill(i, this, change, start, end);
    }

    return this
}