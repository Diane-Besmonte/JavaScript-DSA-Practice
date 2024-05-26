// *** Hash Table
// - also known as hash map, is a data structure that is used to have store key-value pairs.

// Hast Table Usage
// are typically implemented where constant time lookup and insertion are required
// - Database indexing
// - Caches

// Hash Table Implementation
// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     this.table[index] = value;
//   }

//   get(key) {
//     const index = this.hash(key);
//     return this.table[index];
//   }

//   remove(key) {
//     const index = this.hash(key);
//     this.table[index] = undefined;
//   }

//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//   }
// }

// const table = new HashTable(50);

// table.set("name", "Jett");
// table.set("age", 25);
// table.display();

// console.log(table.get("name"));

// table.set("Matte", "Skye");
// table.display();

// Hash Table Collisions
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] == key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push(key, value);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
console.log("----------------");
table.set("name", "Jett");
table.set("age", 25);
table.display();

console.log(table.get("name"));

table.set("Matte", "Skye");
table.display();

table.set("name", "Diane");
table.remove("name");
table.display();

// *** Tree Overview
// - is a hierarchical data structure that consists of nodes connected by edges

// Tree Usage
// - A family tree
// - An organization tree
// - DOM
// - Chatbots
// - Abstact syntax trees
