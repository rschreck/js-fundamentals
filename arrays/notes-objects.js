const notes = [{
    title : 'learn JSx',
    body : 'arrays'
}, {
    title : 'learn JS2',
    body : 'arrays'
}, {  
    title : 'learn JS3',
    body : 'arrays'
}]
// notes.findIndex(function(note,index){
//     console.log(note,index);
//     return note.title === 'learn JS2'
// })
// const findNote = function(notes, noteTitle){
//     const index =  notes.findIndex(function(note,index){
//         return note.title === noteTitle
//     })
//     return notes[index]
// }

const findNote = function(notes, noteTitle){
    const note =  notes.find(function(note,index){
        return note.title === noteTitle
    })
    return note
}
const deleteNote = function (notes,noteTitle){
    const index = notes.findIndex(function(note,index){
        return note.title ===  noteTitle
    })
   return notes.splice(index,1)
}

const findMatchedNote = function (notes,noteTitle){
    const filternotes =  notes.filter(function(note,index){
        const isNoteTilteMatched = note.title.toLowerCase().includes(noteTitle.toLowerCase())
        const isNoteBodyMatched = note.body.toLowerCase().includes(noteTitle.toLowerCase())
        return isNoteTilteMatched || isNoteBodyMatched
    })
    return filternotes
}
const sortNotes = function(notes){
    notes.sort(function(a,b){
        if (a.title < b.title)
            return -1
            else if (b.title < a.title)
                return 1
            else 
             0
    })
}

//console.log(notes);
sortNotes(notes)
console.log('after sorting',notes);
//let index = deleteNote(notes,'learn JS');
//console.log(findMatchedNote(notes,'js'));
//console.log(notes);