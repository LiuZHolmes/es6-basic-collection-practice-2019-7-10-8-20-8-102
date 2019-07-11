'use strict';

module.exports = (collectionA, objectB) => collectionA.map(x => x.key).filter(x => objectB.value.find(y => x === y) != undefined)
