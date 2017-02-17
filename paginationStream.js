"use strict";

const highland = require('highland');

module.exports = loadFromPage.bind(null, 1);

function loadFromPage(page, endpoint, parameters){
  return highland((push, next) => {
    endpoint.list({ page }, parameters)
      .then(response => {
        response.results.forEach(photo => {
          push(null, photo);
        });

        if (response.pages === page){
          push(null, highland.nil);
        }else{
          next(loadFromPage(page + 1, endpoint, parameters))
        }
      })
      .catch(error => {
        push(error);
      });
  });
}