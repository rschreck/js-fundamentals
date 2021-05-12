let myBook = {
    name : "book1",
    title : "book1Title",
    author: "George Orwell",
    pageCount: 326,
    detail: function() {
        return `${this.name} is written by ${this.author}`
    }
    
}
let myCloneBook = Object.assign({}, myBook); 
console.log(`Clone ${JSON.stringify(myCloneBook)}`);
let myBook2 = {
    name : "book2",
    title : "book2Title",
    author: "author2",
    pageCount: 5526,
    detail: function() {
        return `${this.name} is written by ${this.author}`
    }
    
}
let getSummary = function(mybook){
    console.log(mybook.detail())
}
getSummary(myBook);
getSummary(myBook2);