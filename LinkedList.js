class _Node {
  constructor(value, next = null) {
      this.value = value;
      this.next = next;
      
  }
}
class LinkedList {
  constructor(item) {
      this.head = new _Node(item);
      this.last = this.head;

      
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }
  length = ()=>
  {
    let count = 0;
    let node = this.head;
    while(node.next)
    {
      count ++;
      node = node.next;

    }
    return count;
  }
  /*insertLast(item) {
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
  }*/
  insertLast(item)
  {
    this.last.next = new _Node(item, null);
    this.last = this.last.next;
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

module.exports = LinkedList; 