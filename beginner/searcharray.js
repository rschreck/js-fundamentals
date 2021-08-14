const notes = [
  {
    title: "new app",
    body: "body1",
  },
  {
    title: "title2",
    body: "new app 2",
  },
  {
    title: "title3",
    body: "body3",
  },
];
const notesB = [
  {
    title: "new appB",
    title: "new appY",
  },
  {
    title: "title3",
    body: "body3",
  },
  {
    title: "title3",
    body: "body3",
  },
  {
    title: "title2B",
    body: "new app 2B",
  },
  {
    title: "title3B",
    body: "body3B",
  },
];
const findNote2 = (notes, title) =>
  notes.findIndex((note, index) => (note.title = title));
console.log("dfdfd", findNote2(notes, "new app"));
const findNote = (notes, title) =>
  notes.find((note, index) => note.title.toLowerCase() === title);
// const findNote = function(notes, notetitle){
//     return notes.find((note,index) =>
//     {
//         return note.title.toLowerCase() === notetitle.toLowerCase()
//     })
// }

// const findNote = function(notes, notetitle){
//     const index = notes.findIndex((note,index) =>
//     {
//         return note.title.toLowerCase() === notetitle.toLowerCase()
//     })
//     return notes[index]
//}

const deleteNote = (notes, title) => {
  const index = notes.findIndex(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  )(index > -1)
    ? notes.splice(index, 1)
    : notes;
};
const deleteNote2 = (notes, notetitle) => {
  const index = notes.findIndex((note, index) => {
    return note.title.toLowerCase() === notetitle.toLowerCase();
  });
  if (index > -1) {
    notes.splice(index, 1);
  }
  return notes;
};

//const note = deleteNote(notes,'titlE1d');
const filterNotefn = (notes, notetitle) => {
  return notes.filter(function (note, index) {
    return note.title.toLowerCase().includes(notetitle);
  });
};
const filterNotes = notes.filter(function (note, index) {
  const condition1 = note.title.toLowerCase().includes("new");
  const condition2 = note.body.toLowerCase().includes("new");
  return condition1 || condition2;
});

const sortNotes = function (notes) {
  console.log("first");
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      console.log("second");
      return 0;
    }
  });
};
const notesCat = notes.concat(notesB);
sortNotes(notesCat);
console.log(notesCat);
//console.log(sortNotes(notesCat))
