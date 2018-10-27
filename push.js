function push(a,b){
    var i;
    for(i = 0; i < a.length; i++){
        a[i] = a[i]
    }
    if(b){
    a[i] = b;
    return a;
    }
    else {
        return a;
    }
}

console.log(push([1, 2, 3, 4],5));

function push(arr,ele){
    arr[arr.length] = ele;
    return arr;
}

