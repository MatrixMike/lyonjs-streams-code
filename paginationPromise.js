"use strict";

const photos = require('./jsonPlaceholder').photos;

module.exports = loadEverything;

function loadEverything(){
  return loadFromPage(0);
}

function loadFromPage(page, results = []){
  return photos.list({ page })
    .then(response => {
      const nextResults = results.concat(response.results);

      if (page >= response.pages){
        return results;
      }
      
      return loadFromPage(page + 1, nextResults);
    });
}