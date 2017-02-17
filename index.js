"use strict";

// Stream example
const streamLoad = require("./paginationStream");
const photos = require('./jsonPlaceholder').photos;

streamLoad(photos)
  .filter(photo => photo.title.split(' ').length > 4)
  .map(photo => photo.url)
  .each(console.log)
  .done();


// Promise example
const promiseLoad = require('./paginationPromise');

promiseLoad()
  .then(console.log);


// Promise with callbacks
const promiseCallbackLoad = require('./paginationPromiseWithCallbacks')

promiseCallbackLoad((error, result) => console.log(result))
  .then(() => console.log('done'));