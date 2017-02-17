"use strict";

const streamLoad = require("./paginationStream");
const { photos, albums } = require('./jsonPlaceholder');

streamLoad(albums)
  .flatMap(album => streamLoad(photos, { albumId: album.id }))
  .filter(photo => photo.title.split(' ').length > 4)
  .map(photo => photo.url)
  .each(console.log)
  .done();