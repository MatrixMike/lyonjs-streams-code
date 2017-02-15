"use strict";

// const streamLoad = require("./paginationStream");

// streamLoad()
//   .each(console.log);


// const promiseLoad = require('./paginationPromise');

// const before = Date.now();
// promiseLoad()
//   .then(console.log)
//   .then(() => {
//     const after = Date.now();
//     console.log(`${after - before}ms`);
//   });

const promiseCallbackLoad = require('./paginationPromiseWithCallbacks')

promiseCallbackLoad((error, result) => console.log(result));