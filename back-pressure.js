"use strict";

const streamLoad = require("./paginationStream");
const { photos, albums } = require('./jsonPlaceholder');

streamLoad(albums)
  .tap(() => console.log(new Date(), "album"))
  .flatMap(album => streamLoad(photos, { albumId: album.id }))
  .each(photo => {
    // NOOP
  });