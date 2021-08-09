let mObj = new WeakMap();
let obj = {
  name: "value",
};
mObj.set(obj, "object value");
obj = null;
console.log(mObj);

//weekMap - WeakMap { <items unknown> }
//Map - Map { { name: 'value' } => 'object value' }

//weekmap will cleared by garbage collection
