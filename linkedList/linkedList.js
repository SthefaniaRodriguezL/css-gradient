/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  var list = {};
  this.head = null;
  this.tail = null;
  var lastNode;
    //fill me in!
};

//write methods here!

var LinkedList = function() {
  var list = {};
  this.head = null;
  this.tail = null;
  this.lastNode = 0;

};
LinkedList.prototype.addToTail = function(value) {

  var currentNode = LinkedList.prototype.makeNode(value);

  if (this.head === null) {
    this.head = currentNode;
    this.tail = currentNode;
  } else {
    this.lastNode = list.tail;
    this.tail = currentNode;
    this.lastNode.next = list.tail;
  }
};
LinkedList.prototype.removeHead = function() {
  var storage = this.head.next;
     var formerHead = this.head.value;

     delete this.head;
     this.head = storage;
     return formerHead;
   };
LinkedList.prototype.contains = function(target) {
  var searchNode = function(target, node) {
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    } else {
      return searchNode(target, node.next);
    };
    return searchNode(target, this.head);
  };
  return list;
};
LinkedList.prototype.makeNode = function(value) {
  var node = {};

   node.value = value;
   node.next = null;

   return node;

};
