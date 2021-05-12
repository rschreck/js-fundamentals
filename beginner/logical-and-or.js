let temp = 56
let isFreezing = false
let isHot = false

if (temp <= 31)
    isFreezing = true
else if (temp >= 60)
    isHot = true
let isNice = !isFreezing && !isHot

console.log(`isNice ${isNice}`)
