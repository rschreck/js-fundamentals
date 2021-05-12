function is2dArray(array){
    if(array[0] === undefined){
    return false;
}else{
    return (array[0].constructor === Array);
}
}
var a =[1,2,3];
var b = [[1,2,3]];
console.log(is2dArray(a));
console.log(is2dArray(b));
