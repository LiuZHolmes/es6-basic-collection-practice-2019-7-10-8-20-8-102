'use strict';

module.exports = (collectionA, objectB) => collectionA.filter(x => (objectB.value.find(y => x === y) != undefined) )
