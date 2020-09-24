const LinkedList  = require('./LinkedList.js');

function main () {
  const list = new LinkedList("Main")
  
  list.insertLast("stuff");
  list.insertLast("things");
  list.insertLast("cats");
  console.log(list.length());
}

main()