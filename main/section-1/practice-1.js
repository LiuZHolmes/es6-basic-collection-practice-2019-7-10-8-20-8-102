'use strict';

module.exports =  (collectionA, collectionB) => collectionA.filter(x => collectionB.find(y => x === y) != undefined);
