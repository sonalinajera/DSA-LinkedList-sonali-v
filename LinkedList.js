//insertFirst, insertLast, remove, find
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next; 
    // this.end = 
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }
  insertLast(item) {
    // check if the linked list is empty
    if (this.head === null) {
      this.insertFirst(item)
    } else {
      // crawl to end of list
      let startingPoint = this.head;
      // crawl until the end of the list
      while (startingPoint.next !== null){
        startingPoint = startingPoint.next;
       }
       startingPoint.next = new _Node(item, null)
    }
  }
  find(value) {
    //start at head
    let currNode = this.head;
    //if empty
    if(!this.head) {
      return null;
    }
    // Check for item 
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    return currNode; 
  }

  remove(item) {
    // if the list if empty
    if (!this.head) {
      return null;
    }
    // if the node is the head, reassign the head to the next node
    if (this.head.value === item) {
      this.head = this.head.next
      return;
    }

    //start at head 
    let currNode = this.head;
    // store previous 
    let previous = this.head;

    while((currNode !== null) && (currNode.value !== item)) {
      // save the previous 
      previousNode = currNode;
      currNode = currNode.next;
    } 
    if(currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next; 
  }
}