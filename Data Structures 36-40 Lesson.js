// DATA STRUCTURES
// - is a way to store and organize data so that it can be used efficiently.

// *** Arrays
// - is a data structure that can hold a collection of values
const arr = [1, 2, 3, "Matte"];
console.log(arr[0]);

// Array Methods
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

// To iterate
for (const item of arr) {
  console.log(item);
}

// Map, filter, reduce, concat, slice, and splice

// Array - Big-O Time Complexity
// - Insert/Remove from end - O(1)
// - Insert/Remove from beginning - O(n)
// - Access - O(1)
// - Search - O(n)
// - Push/Pop - O(1)
// - Shift/unshift/concat/slice/splice - O(n)
// - forEach/map/filter/reduce - O(n)

// *** Objects
// - is an unordered collection of key-value pairs.
const obj = {
  name: "Jet",
  age: 27,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};

obj.hobby = "basketball";

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);

console.log(obj);
delete obj.hobby;
console.log(obj);

obj.sayMyName();

// Object Methods
// Object.keys(), .values(), entries()

// Object - Big-O Time Complexity
// - Insert - O(1)
// - Remove - O(1)
// - Access - O(1)
// - Search - O(n)
// - Object.keys() - O(n)
//  - Object.values() - O(n)
//  - Object.entries() - O(n)

// *** Set
// - a data structure that can hold a collection of values. The values however must be unique.
const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(4));
set.delete(3);
console.log(set.size);
set.clear();

for (const item of set) {
  console.log(item);
}

// *** Map
// - is an unordered collection of key-value pairs. Both keys and values can be of any data type.
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3);
map.delete("b");
console.log("Map has a: " + map.has("a"));
console.log("Map size is: " + map.size);
map.clear();

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
