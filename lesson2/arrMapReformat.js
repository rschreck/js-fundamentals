let arr = [
    {key:1,value:30},
    {key:3,value:10},
    {key:1,value:550},
]

let reformatArr = (arr) => arr.map((item,index)=>
   { 
       let rObj = {}
        rObj[item.key] = item.value
        return rObj
})

console.log(reformatArr(arr))