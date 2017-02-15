"use strict";

const photos = require('./jsonPlaceholder').photos;

module.exports = loadFromPage.bind(null, 0);

function loadFromPage(page, callback){
  return photos.list({ page })
    .then(response => {
      response.results
        .forEach(result => callback(undefined, result));
      
      if (page >= response.pages){
        return;
      }
      
      return loadFromPage(page + 1, callback);
    })
    .catch(error => callback(error));
}