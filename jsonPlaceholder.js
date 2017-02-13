"use strict";

const fetch = require('node-fetch');
const queryString = require('querystring');

const URL = 'http://jsonplaceholder.typicode.com';

module.exports = {
  photos: {
    list: list.bind(null, '/photos')
  }
}


function list(path, { page = 1, size = 10 } = {}){
  size = Math.max(0, size);
  page = Math.max(1, page);

  const searchParams = {
    _limit: size,
    _start: (page - 1) * size
  };

  return fetch(`${URL}${path}?${queryString.stringify(searchParams)}`)
    .then(response => {
      return Promise.all([
        response.json(),
        response.headers.get('X-Total-Count'),
      ]);
    })
    .then(([results, total]) => {
      return {
        results,
        total,
        page,
        pages: size > 0 ? Math.ceil(total / size) : undefined 
      }
    });
}