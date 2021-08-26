

// 01 = FOREACH

function callbackNewForEach(element, indice, array) {
    return undefined
}
Array.prototype.newForEach = function(callback){
    for (let i = 0;  i < this.length; i++){
        callback(this[i], i, this);
    }
}



// 02 = FILL

Array.prototype.newFill = function(change, start, end) {
    for (let i = 0; i < this.length; i++){
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
    return this
}



// 03 - MAP

function callbackNewMap(element, index, array) {
    return element%2
}

Array.prototype.newMap = function(callback){
    let newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}



// 04 - SOME

function callbackNewSome(element, index, array) {
    return element
}

Array.prototype.newSome = function(callback) {
    let output = undefined;
    for (let i = 0; i < this.length; i++){
        output = callback(callbackNewSome(this[i], i, this))
        if (output === true){
            return true
        }
    }
    return false
}



// 05 - FIND

function callbackNewFind(element, index, array) {
    return element
}

Array.prototype.newFind = function(callback) {
    let output = ''
    for (let i = 0; i < this.length; i++){
        output = callback(this[i], i, this)
        if (output === true){
            return this[i]
        }
    }
    //return undefined
}


// 06 - FINDINDEX

function callbackNewFindIndex(element, index, array) {
    return element
}

Array.prototype.newFindIndex = function(callback) {
    let output = ''
    for (let i = 0; i < this.length; i++){
        output = callback(this[i], i, this)
        if (output === true){
            return i
        }
    }
    return -1
}


// 07 - EVERY

function callbackNewEvery(element, index, array) {
    return element
}

Array.prototype.newEvery = function (callback){
    let output = ''
    for (let i = 0; i < this.length; i++){
        output = callback(this[i], i, this)
        if (output === false){
            return false
        }
    }
    return true
}



// 08 - FILTER

function callbackNewFilter(element, index, array) {
    return element
}

Array.prototype.newFilter = function (callback){
    let output = []
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            output.push(this[i])
        }
    }
    return output
}



// 09 - CONCAT