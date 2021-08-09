let product = new Map();
product.set("pCode", "1001");
product.set(1, "Apple");
product.set(true, "Available");

console.log(product.get(1));
console.log(product.get(true));
//objects don't have length key like array
//but map has size property

console.log(product.size);
//this way is not preferred because it creates string keys
product["price"] = 1111;
//set method return map as well

let product2 = new Map();
product2.set("pCode", "1001").set("pName", "Apple").set("price", 45);

let obj = Object.fromEntries(product2.entries());
console.log(obj);
console.log(product);

for (let k of product.keys()) {
  console.log(k);
}
for (let v of product.values()) {
  console.log("value", v);
}
for (let e of product.entries()) {
  console.log(e);
}
for (let [ek, ev] of product.entries()) {
  console.log(ek, ev);
}

let product3 = new Map();
product3.set("pCode", 1001).set("pName", "Orange").set("price", 56);
//delete a key
product3.delete("pName");
console.log(product3, product3.size);
product3.clear();
console.log(product3, product3.size);
//object to Map
let obj2 = {
  pCode: 1001,
  pName: "Orange",
  price: 56,
};
let m = new Map(Object.entries(obj2));
console.log(m);

//notes - map are iterable unlike object - For each
// map key could be any type not just "string" like object
//map maintains the order of the insertion
//maps have size property
