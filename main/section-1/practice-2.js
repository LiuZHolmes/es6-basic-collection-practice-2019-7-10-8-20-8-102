'use strict';

module.exports = (collectionA, collectionB) => collectionA.filter(x => (collectionB[0].find(y => x === y) != undefined))

