const LinkedList  = require('./LinkedList.js');
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
function reverseLinkList(linkList)
{
  if(!linkList.head.next)
  {
    return linkList.head
  }
}


function main () {
  const list = new LinkedList()
  list.insertLast("Meow1");
  list.insertLast("Meow2");
  list.insertLast("Meow3");
  list.insertLast("Meow4");
  //displayLinkList(list)
  //console.log(list.pop())
  reverseLinkList(list)
  displayLinkList(list)
  
}

main()

/* 4. Mystery program: O(n2) because it's nested loops and there for does twice as many operations per link, as a single loop would.
Also it removes doubles.
*/