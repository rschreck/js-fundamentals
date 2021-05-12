const Hangman = function(word, noOfGuesses){
    this.word = word
    this.noOfGuesses = noOfGuesses
}
const hm1 = new Hangman('Renuka', 3)
const hm2 = new Hangman('Dan', 1)
const hmArray = []
hmArray.push(hm1)
hmArray.push(hm2)
console.log(hm1);
console.log(hmArray);