/* eslint-disable no-unused-vars */
import Book from './module/book.js';
import WebStatus from './module/webstat.js';
import Clock from './module/time.js';

const myList = new Book();

const myWebStatus = new WebStatus({
  webSections: [
    'book-list-section',
    'add-book-section',
    'contact-section',
  ],

  defaultSection: 0,
});

const myClock = new Clock('date');