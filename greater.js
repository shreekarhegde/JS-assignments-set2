// Create the function maxOfThree that evaluates three numbers and returns the largest number out of the three.
// EXAMPLES:
// 10 is the largest number out of the 3 number arguments
// INPUT: maxOfThree(5,4,10);
// OUTPUT: 10
// Two 7's are passed in as values, 7 is also the largest value
// INPUT: maxOfThree(7,7,4);
// OUTPUT: 7

function greaterThan(a,b,c){
    var diff1;
    var diff2;
    var diff3;
    if(a >= b){
        diff1 = (a - b);        
    }
    else{
        diff1 = (b - a);
    }
    if(b >= c){
        diff2 = (b - c);
    }
    else{
        diff2 = (c - b);
    }
    if(a >= c){
        diff3 = (a - c);
    }
    else{
        diff3 = (c - a);
    }

    if((diff1 > diff2) &&(diff1 > diff3)){
        return b;
    }
    else if((diff2 > diff1) &&(diff2 > diff3)){
        return c;
    }
    else{
        return a;
}
}

console.log(greaterThan(5,4,10));
console.log(greaterThan(7,7,4));