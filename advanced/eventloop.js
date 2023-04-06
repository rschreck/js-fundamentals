function main(){
    console.log('A');
    setTimeout(
        function print(){ console.log('B'); }
        ,0);
        setTimeout(()=>
             console.log('D')
            ,0);
    console.log('C');
}
main(); // A,C and B,D
console.log(0.2+0.1 === 0.3);//false due to flatling point precision
console.log(typeof (0.2+0.1) );
console.log(typeof 0.3 );