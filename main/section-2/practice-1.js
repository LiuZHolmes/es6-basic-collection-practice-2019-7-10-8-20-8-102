'use strict';

module.exports = collection => collection.reduce((result, element) => { 
    result.find(x => x.key === element) ? 
    result.find(x => x.key === element).count++ 
    : result.push({key:element,count:1})
    return result;
  },[])

