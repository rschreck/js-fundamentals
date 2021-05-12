const singleLinkedList = {
    head:{
        data:12,
        next:{
            data:19,
            next:{
                data:37,
                next:null
            }
        }
    }
}
console.log(singleLinkedList)
//To access 2nd item
console.log(singleLinkedList.head.next.next.data)