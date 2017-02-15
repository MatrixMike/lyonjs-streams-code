"use strict";

const highland = require('highland');
const photos = require('./jsonPlaceholder').photos;

module.exports = loadFromPage.bind(null, 0);

function loadFromPage(page){
  return highland((push, next) => {
    photos.list({ page })
      .then(response => {
        response.results.forEach(photo => {
          push(null, photo);
        });

        if (response.pages === page){
          push(null, highland.nil);
        }else{
          next(loadFromPage(page + 1))
        }
      })
      .catch(error => {
        push(error);
      });
  });
}