const toDoArray = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, eggs, bread, cheese",
    topic: ["shopping", "food", "cleaning"],
  },
  {
    id: 5,
    title: "Do laundry",
    description: "Wash, dry, fold clothes",
    topic: ["household", "cleaning"],
  },
  {
    id: 3,
    title: "Read a book",
    description: "The Hitchhiker's Guide to the Galaxy",
    topic: ["leisure", "reading", "science fiction"],
  },
];
//create object from array
const objectToDos = Object.fromEntries(
  toDoArray.map((item) => [item.id, item])
);

console.log(objectToDos);
