// Write a function that accepts and array of numbers and returns and array of arrays. The first array in the return array should include all the even numbers from the argument array. The second array in the return array should include all odd numbers.
// Examples
// INPUT: evenOdd([1,2,3,4,5,6]);
// OUTPUT: [ [2,4,6], [1,3,5] ]

//var array = ([1, 2, 3, 4, 5, 6]);

function evenOdd(a){
    if(a.length==0){
        return "empty array";
    }
    var array1 = [],array2= [],array3 = [];
    for(var i = 0; i < a.length; i++){
        if(a[i] % 2 === 0){
           array1.push(a[i]);
            
        }
        else{
            array2.push(a[i]);
        }
        
    }
    array3.push(array1,array2);
    //console.log(array3)
    return array3;
}

//console.log(evenOdd([1, 2, 3, 4, 5, 6]));
console.log(evenOdd([]));