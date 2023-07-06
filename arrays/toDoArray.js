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
  // loop through the topic property of each toDo object
  for (let topic of toDo.topic) {
    // check if the topic already exists in the topicArray
    let index = topicArray.findIndex((item) => item.topic === topic);
    if (index === -1) {
      // if not, create a new object with the topic and count of 1
      topicArray.push({ topic: topic, count: 1 });
    } else {
      // if yes, increment the count of the existing object
      topicArray[index].count++;
    }
  }
}

// display the result
console.log(topicArray);
