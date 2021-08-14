function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}

var car =  Vehicle("Honda", "white", "2010", "UK");
console.log(car);//without new - undefined

//with new 
//Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' }//
