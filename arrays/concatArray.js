let array1 = ["Renuka", "Schreck"];
let array2 = ["Dan", "Schreck"];
function uniqueArray(arr){
    for(let i = 0; i< arr.length; ++i) {
        for ( let j = i + 1; j < arr.length; ++j) {
            if ( arr[i] === arr[j])
                arr.splice( j--, 1)
        }
    }
}
console.log(array1.concat(array2));
let arrUnique = array1.concat(array2);
uniqueArray(arrUnique)
 console.log(arrUnique);