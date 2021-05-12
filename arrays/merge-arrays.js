let a = [[1],[[3],['a']]]
let a1 = [1,3]
function is2dArray(array){
    if(array[0] === undefined){
    return false;
}else{
    return (array[0].constructor === Array);
}
}
let b = a.reduce(function(a,b) {
    return a.concat(b) }
    )

let countDown = function f(fromNumber) {
        console.log(fromNumber);
        let nextNumber = fromNumber - 1;
    
        if (nextNumber > 0) {
            f(nextNumber);
        }
    }
    
let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);
let rcf = function f(nu){
    console.log(nu);
    let nextnumber = nu -1
    if (nextnumber>0){
        f(nextnumber)
    }
}
rcf(10)
