const notes = ['Note 1','Note 2','Note 3']
function fnInsertItemAtIndex(arr, index, item){
    arr.splice(index,0,item)
}
fnInsertItemAtIndex(notes, 2, 'Inserted Note');
console.log(notes);