function foo() {
   
    let x= y =0
    x++;
    y++;
    return x;
}
foo(),
console.log( typeof x, typeof y, y);