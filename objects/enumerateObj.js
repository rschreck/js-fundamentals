 let myBook = {
    name : "book1",
    title : "book1Title",
    author: "George Orwell",
    pageCount: 326,
    detail: function() {
        return `${this.name} is written by ${this.author}`
    }
}
for (var key in myBook) {
    if (myBook.hasOwnProperty(key)) {
        console.log(`${key} has value ${myBook[key]}`);
    }
}