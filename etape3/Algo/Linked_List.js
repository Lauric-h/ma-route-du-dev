// Create a node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Create linked list (composed of nodes)
class LinkedList {
    constructor(head = null) { // if the head node is not passed, the head will be null
        this.head = head;
    } 

    // ---- METHODS ---- 
    // gives size of list
    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    // empties the list
    clear() {
        this.head = null;
    }

    // get last element of list
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    // get first element
    getFirst() {
        return this.head;
    }
}

let node1 = new Node(2);
let node2 = new Node(5);

node1.next = node2;

let list = new LinkedList(node1);

// insert new node at the beginning
let node3 = new Node(10);

node3.next = node1;
list.head = node3;

// insert new node at the end 
let node4 = new Node(15);
let lastNode = list.getLast();

lastNode.next = node4;
console.log(list.getLast().data)