class _Node {
  constructor(value, next = null, previous = null) {
      this.value = value;
      this.next = next;
      this.previous = previous;
      
  }
}
class LinkedList {
  constructor() {
      this.head = null;
      this.last = null;

      
  }
  insertFirst(item) {
    if(this.head)
    {
      this.head = new _Node(item, this.head, null)
      this.head.next.previous = this.head;
    }
    else
    {
      this.head = new _Node(item, null, null)
      this.last = this.head;
    }
    
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
    if(this.last)
    {
      this.last.next = new _Node(item, null, this.last);
      this.last = this.last.next;
    }
    else
    {
      this.head = new _Node(item, null, null);
      this.last = this.head;
    }
    
  }
  insertAt(index, item)
  {
    let node = this.head;
    let i = 0;
    while(i < index)
    {
      
      node = node.next
      i++;
      if(i < index && !node)
      {
        return -1;
      }
      else if(i == index)
      {
        node.value = item;
        return i;
      }
    }
  }
  find(item) {
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
  findPrev(item) {
    return this.find(item).previous;
  }
  findByIndex(index)
  {
    let node = this.head;
    let i = 0;
    while(i <= index && node)
    {

      if(i == index)
      {
        return node;
      }
      node = node.next;
      i++;
    }
    return -1;
  }
  insertAfter(search, item)
  {
    let ref = this.find(search)
    let next = ref.next;
    ref.next = new _Node(item, next, ref);
  }
  insertBefore(search, item)
  {
    let ref = this.find(search)
    let previous = ref.previous;
    previous.next = new _Node(item,ref,previous);
  }
  pop()
  {
    let node = this.last;
    this.last = node.previous
    this.last.next = null;
    return node;
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