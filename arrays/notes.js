const notes = ['Note 1','Note 2','Note 3']
//length is property
// console.log(notes.length);
// //array is mostly methods supported

// //array is 0 based
// console.log(notes[0]);
// console.log(notes[notes.length-1]);

// // manipulating arrays - Add an item to the end of the list

// notes.push('Note 4');
// console.log(notes[notes.length-1]);

// //pop remove from the end
// notes.pop();

// console.log(notes);
// //shift- removed unshift-add items are added or removed from the beginning
// notes.shift()
// notes.unshift('Note 0')
// console.log(notes);

//spice( index, how many, add)
console.log(notes);
notes.splice(1,0,'inserted','inserted2')
console.log(notes);
notes[0] = 'Zero'
let x = notes.shift()
console.log(x);

//array iteration

notes.forEach(function(note, index){
   // console.log(note, index);
})

//for statement
for(i = 0; i< notes.length; i++){
  //  console.log(i,notes[i]);
}
console.log('For desc');
for(i = notes.length-1; i>=0; i--){
    console.log(i,notes[i]);
}
console.log('For desc for each');
notes.reverse().forEach(function(note, index){
     console.log(note, index);
 })
//indexof return index if matched else return -1
 console.log(notes.indexOf('inserted2x'));