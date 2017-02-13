"use strict";

const photos = require('./jsonPlaceholder').photos;

module.exports = loadEverything;

function loadEverything(){
  return loadFromPage(0);
}

function loadFromPage(page, results = []){
  return photos.list({ page })
    .then(response => {
      results = results.concat(response.result);

      if (response.pages === page){
        return results;
      }
      
      return loadFromPage(page + 1, results);
    });
}