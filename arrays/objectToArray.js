let objectToDos = {
  1: {
    id: 1,
    title: "Buy groceries",
    description: "Milk, eggs, bread, cheese",
    topic: ["shopping", "food", "cleaning"],
  },
  3: {
    id: 3,
    title: "Read a book",
    description: "The Hitchhiker's Guide to the Galaxy",
    topic: ["leisure", "reading", "science fiction"],
  },
  5: {
    id: 5,
    title: "Do laundry",
    description: "Wash, dry, fold clothes",
    topic: ["household", "cleaning"],
  },
};
let toDosArray = Object.values(objectToDos);
console.log(toDosArray);
