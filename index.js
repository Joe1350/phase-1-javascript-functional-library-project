function collectionToArray(collection) {
    if (Array.isArray(collection)){
        return collection.slice()
    } else {
        return Object.values(collection)
    }
}

function myEach(collection, callback) {
    let newCollection = collectionToArray(collection)
    for(let item of newCollection) {
        callback(item)
    }
    return collection
}

function myMap(collection, callback) {
    let newCollection = collectionToArray(collection)
    let newArray = [];
    for (let item of newCollection) {
        newArray.push(callback(item))
    }
    return newArray
}

function myReduce(collection, callback, acc) {
    let newCollection = collectionToArray(collection)
    if (acc) {
        // do nothing
    } else {
        acc = newCollection[0];
        newCollection = newCollection.slice(1)
    }
    for (let item of newCollection) {
        acc = callback(acc, item, newCollection)
    }
    return acc
}

function myFind(collection, predicate) {
    let newCollection = collectionToArray(collection)
    for (let item of newCollection) {
        if (predicate(item)) {
            return item
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    let newCollection = collectionToArray(collection)
    let newArray = []
    for (let item of newCollection) {
        if (predicate(item)) {
            newArray.push(item)
        }
    }
    return newArray
}

function mySize(collection) {
    let newCollection = collectionToArray(collection)
    return newCollection.length
}

function myFirst(array, num) {
    if (num) {
        return array.slice(0, num)
    } else {
        return array[0]
    }
}

function myLast(array, num) {
    if (num) {
        return array.slice(array.length - num, array.length)
    } else {
        return array[array.length - 1]
    }
}

function mySortBy(array, callback) {
    // bonus
}

function myFlatten(array, boolean, newArray) {
    // bonus
}

function myKeys(object) {
    let keys = []
    for (let key in object) {
        keys.push(key)
    }
    return keys
}

function myValues(object) {
    let values = []
    for (let key in object) {
        values.push(object[key])
    }
    return values
}