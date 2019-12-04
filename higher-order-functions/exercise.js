// Challenge 1
function addTwo(num) {
    return num + 2
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return `${word}s`
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    var newArr = []
    for(let i = 0; i<array.length; i++){
       return newArr.push(callback(array[i]))
    }
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        (callback(array[i]))
    }
    return array
}

var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});

function forEach(letters,callback){
    for(let i =0; i < letters.length; i++){
        alphabet += callback(letters[i])
    }
    return alphabet
}
//returns undefined
// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    var arr = []
    array.forEach((e) => {
        arr.push(callback(e))
    })
    return arr;
}

//Extension 2
function reduce(array, callback, initialValue) {
    var sum = initialValue;
    array.forEach(function(el) {
      sum = callback(sum, el);
    });
    return sum;
  }

//Extension 3
function intersection(...arrays) {
    return arrays.reduce((acc,cv) => {
       acc = acc.filter((e) => cv.includes(e))
       return acc
    })
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {

}


function concat(a, b) {
    return a.filter(function(el) {
      return b.includes(el);
    });
  }
  //console.log(concat([1,2,3],[2,3,4])); // [2,3]
  
  function intersection(arrays) {
    var args = Array.from(arguments);
    return reduce(args, concat, args[0]);
  }

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
