'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = [];
  collectionA.forEach(x => {
    if(collectionB.find(y => x === y) != undefined) {
      result.push(x);
    }
  });
  return result;
}
