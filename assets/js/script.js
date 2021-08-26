

// 01 = FOREACH

function callbackNewForEach(element, indice, array) {
    return undefined
}
Array.prototype.newForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}



// 02 = FILL

Array.prototype.newFill = function (change, start, end) {
    for (let i = 0; i < this.length; i++) {
        if (start !== undefined) {
            if (end !== undefined) {
                if (i >= start && i < end) {
                    array[i] = change
                }
            } else {
                if (i >= start) {
                    array[i] = change
                }
            }
        } else {
            array[i] = change
        }
    }
    return this
}



// 03 - MAP

function callbackNewMap(element, index, array) {
    return element
}

Array.prototype.newMap = function (callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}



// 04 - SOME

function callbackNewSome(element, index, array) {
    return element
}

Array.prototype.newSome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (output = callback(this[i], i, this)) {
            return true
        }
    }
    return false
}



// 05 - FIND

function callbackNewFind(element, index, array) {
    return element
}

Array.prototype.newFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
        return this[i]

    }
}


// 06 - FINDINDEX

function callbackNewFindIndex(element, index, array) {
    return element
}

Array.prototype.newFindIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            return i
        }
    }
    return -1
}


// 07 - EVERY

function callbackNewEvery(element, index, array) {
    return element
}

Array.prototype.newEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false
        }
    }
    return true
}



// 08 - FILTER

function callbackNewFilter(element, index, array) {
    return element
}

Array.prototype.newFilter = function (callback) {
    let output = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            output.push(this[i])
        }
    }
    return output
}



// 09 - CONCAT

Array.prototype.newConcat = function (array) {
    let output = [...this]
    for (let i = 0; i < array.length; i++) {
        output.push(array[i])
    }
    return output
}



// 10 - INCLUDES

Array.prototype.newIncludes = function (searchElement, fromIndex) {
    let i = this.length + fromIndex;

    if (i === undefined) {
        i = 0
    }

    for (i; i < this.length; i++) {
        if (this[i] === searchElement) {
            return true
        }
    }
    return false
}



// 11 - INDEXOF

Array.prototype.newIndexOf = function (searchElement, fromIndex) {
    if (fromIndex >= this.length) {
        return -1
    }

    if (fromIndex < 0) {
        for (let i = this.length; i >= this.length + fromIndex; i--) {
            if (this[i] === searchElement) {
                return true
            }
        }
        return false
    }

    let i = 0 + fromIndex;

    if (fromIndex === undefined) {
        i = 0
    }

    for (i; i < this.length; i++) {
        if (this[i] === searchElement) {
            return 1
        }
    }
    return -1
}


// 12 - JOIN

Array.prototype.newJoin = function (separator) {
    let output = ''
    for (let i = 0; i < this.length; i++) {
        output += this[i]
        if (i < this.length - 1) {
            if (separator === undefined) {
                output += ','
            } else {
                output += separator
            }
        }
    }
    return output
}


// 13 - REDUCE

function callbackNewReduce(total, currentValue) {
    return total + currentValue
}

Array.prototype.newReduce = function (callback, currentValue, currentIndex, array) {
    let output = 0

    for (let i = 0; i < this.length; i++) {
        output = callback(output, this[i])
    }

    return output
    
}