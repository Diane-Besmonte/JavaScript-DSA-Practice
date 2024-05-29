// Adjacency List
// - vertices are stored in a map like data structure, and every vertex stores a list of its adjacent vertices.

let adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjacencyList["C"]);

// Graph Add Vertex and Edge
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.addVertex[vertex1];
    }
    if (this.adjacencyList[vertex2]) {
      this.addVertex[vertex2];
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
console.log(graph.hasEdge("A", "C"));

// graph.removeEdge("A", "B");
// graph.display();

graph.removeVertex("B");
graph.display();

// *** Further Learning

// Built in data structures
// - arrays, objeects, sets, maps

// Custom data structures
// - stacks, queues, circular queues, linked lists, linked lists with tail, doubly linked lists, hash tables, trees, binary search trees, graph

// Priority queue
// Circular linked lists
// AVL trees, red black trees and tries
// Directed acyclic graphs
// Prim's, Kruskal's and Floyd's algorithms
// Solve problems that utilize these data structures
