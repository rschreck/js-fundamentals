const notes = ["Note 1", "Note 2", "Note 3"];
function fnInsertItemAtIndex(arr, index, item) {
  arr.splice(index, 0, item);
}
// fnInsertItemAtIndex(notes, 2, 'Inserted Note');
const note2Index = notes.indexOf("Note 2");
notes.splice(note2Index, 1, "newline");

// fnInsertItemAtIndex(notes, 2, 'Inserted Note');
console.log(note2Index);
console.log(notes);
