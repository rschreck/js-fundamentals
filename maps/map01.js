let map = new Map();
map.set(5, "Int Type");
map.set(5, "Int Type");
map.set("5", "Sting Type");
map.set({ key: "5" }, "Obj Type");
console.log(map.size);

for (var [key, value] of map.entries()) {
  console.log(key, value);
}
let mapArr01 = new Map(map);
console.log(mapArr01);
