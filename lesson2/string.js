let  city = 'Austin'
let splitCity = city.split('')
console.log(splitCity)
let cities = []
let tx_cities = ['Austin']
let typeofCities = typeof cities
//console.log(Array.isArray(typeofCities))
cities.push('NewYork')
cities.concat(...[tx_cities])
let allCities = cities.concat(tx_cities)
//console.log(allCities)

let interpolationString = `My city is ${city}`
console.log(interpolationString)
