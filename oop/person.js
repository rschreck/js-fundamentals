class PersonClass {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like)=>{
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio 
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0];
        this.lastName = names[1];
    }

}
// const myPerson = new PersonClass('Charlie','Schreck',7,['walking']);
// console.log(myPerson);
// console.log(myPerson.getBio());
const Allie = new PersonClass();
Allie.setName('Allie Schreck')
Allie.age = 14
console.log(Allie);
console.log(Allie.getBio());

class Managers extends PersonClass {
    constructor(firstName,lastName,age, likes,position) {
        super(firstName,lastName,age, likes)
        this.position = position
    }
    getBio() {
        let bio = `${this.firstName} is a ${this.position}.`
    this.likes.forEach((like)=>{
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio 
    }
    getYearsLeft(){
        return 65 - this.age
    }
   
}
const mgr1 = new Managers('Lacy','Hillard', '43', [], 'supervisor')
console.log(mgr1.getBio());
console.log(mgr1.getYearsLeft());
const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}
Person.prototype.getBio = function(){
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like)=>{
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

Person.prototype.setName = function(fullName){
    const names = fullName.split(' ')
    this.firstName = names[0];
    this.lastName = names[1];
}
const me = new Person('Renuka', 'Schreck', 47)
const hubby = new Person('Dan', 'Schreck', 57, ['exercise','netflix'])
const Reva = new Person()
Reva.age = 20;
Reva.setName('Reva Kulkarni')
console.log(hubby.getBio());
console.log(Reva);