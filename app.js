const LinkedList  = require('./LinkedList.js');
const BST = require('./BinarySearchTree');
function displayLinkList(linkList)
{
  for(let i = 0; i<=linkList.length(); i++)
  {
    console.log(linkList.findByIndex(i).value);
  }
}
function isEmpty(linkList)
{
  return linkList.head == null;
}


function reverse(head) {
  if (!head || !head.next) {
    return head;
  }                                  
  let tmp = reverse(head.next);      
  head.next.next = head;                            
  head.next = undefined;
  return tmp;
}
/* 
  Head = 1 >> 2 >> 3 >> 4 | Head = 2 >> 3 >> 4 | Head = 3 >> 4 | Head = 4 Returned by if statement
  Head = 3 >> 4 while tmp is a ref to 4 | Head.next.next(which is a ref to 4.next) = 3 >> 4 | Head.next(which is a ref to 3.next) = undefined.
  tmp is now ref to 4, which now has a next that points to 3 | tmp gets returned,
  Head = 2 >> 3 >> 4 while tmp is still a ref to 4 >> 3 since it was returned | head.next.next(which is a ref to 3.next) = 2 >> 3 >> 4 |
  Head.next(which is a ref to 2.next) = undefined, tmp is now a ref to 4 >> 3 >> 2, and tmp is returned.
  Head = 1 >> 2 >> 3 >> 4 while tmp is still a ref to 4 >> 3 >> 2 | head.next.next(which is a ref to 2.next) = 1 >> 2 >> 3 >> 4 |
  Head.next(which is a ref to 1.next) = undefined, and tmp is now a ref to 4 >> 3 >> 2 >> 1 >> null
  tmp is returned, the linked list is reversed. 
*/

function main () {
  const binaryTree = new BST(8,"Primary meow");
  binaryTree.insert(10, "meow 10");
  binaryTree.insert(5, "meow 5");
  binaryTree.insert(15, "meow 15");
  binaryTree.insert(14, "meow 14");
  binaryTree.insert(20, "meow 20");

  binaryTree.remove(15);
  console.log(binaryTree.findNode(20));

  //while(1){}
  
}

main()

/* 4. Mystery program: O(n2) because it's nested loops and there for does twice as many operations per link, as a single loop would.
Also it removes doubles.
*/