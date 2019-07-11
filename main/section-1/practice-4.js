'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result = [];
  collectionA.forEach(x => {
    if(objectB.value.find(y => x.key === y) != undefined) 
      result.push(x.key);
  });
  return result;
}
