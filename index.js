/* eslint-disable no-unused-vars */
import Book from './modules/book.js';
import WebStatus from './modules/webstat.js';
import Clock from './modules/time.js';

const myList = new BookList();

const myWebStatus = new WebStatus({
  webSections: [
    'book-list-section',
    'add-book-section',
    'contact-section',
  ],

  defaultSection: 0,
});

const myClock = new Clock('date');