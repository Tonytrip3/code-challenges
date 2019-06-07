'use strict';

const Node = require('../lib/node');
const LinkList = require('../lib/linklist');
const linkList = new LinkList();

linkList.addNewNodeAtHead(27);
linkList.addNewNodeAtHead(25);
linkList.addNewNodeAtHead(23);
linkList.addNewNodeAtHead(22);
linkList.addNewNodeAtHead(21);
linkList.addNewNodeAtHead(20);
linkList.find(23);
linkList.addNewNodeAtTail(28);
linkList.append(30);
linkList.insertBefore(30, 29);
linkList.insertAfter(30, 31);

describe('Linked List Length check', () => {
  it('passed NaN', () => {
    expect(linkList.mthFromEnd('hello')).toEqual('You must input a number not a string.');
  });
  it('passed a number too large', () => {
    expect(linkList.mthFromEnd(300)).toEqual('__Error__ The linked list is too short for that number!');
  });
  it('passed a valid input', () => {
    let resultOfSearch = linkList.mthFromEnd(3);
    expect(resultOfSearch).toEqual(28);
  });
});