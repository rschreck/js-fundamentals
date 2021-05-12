let a1 = [1,4,6,8]
let sum = a1.reduce(function(a,b){
  let x = a + b
  if (x > 9) {
    return x
  }  
  else {
      return x
  } 
})
console.log(sum);