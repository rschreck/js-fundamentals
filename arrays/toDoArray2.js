// create an array of objects with toDo Id, title, description, topic
let toDoArray = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, eggs, bread, cheese",
    topic: ["shopping", "food", "cleaning"],
  },
  {
    id: 2,
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

// get the array with toDo topic and count
let topicArray = [];

// loop through the toDoArray and extract the topics
for (let toDo of toDoArray) {
  // console.log(toDo);
  let cloneToDo = { ...toDo };
  delete cloneToDo["topic"];

  // console.log(cloneToDo);
  for (let topic of toDo.topic) {
    // console.log(topic);
    let index = topicArray.findIndex((item) => item.topic === topic);
    if (index === -1) {
      topicArray.push({ topic: topic, count: 1, toDo: cloneToDo });
    } else {
      topicArray[index].count++;
    }
  }
}

// display the result
console.log(topicArray);
