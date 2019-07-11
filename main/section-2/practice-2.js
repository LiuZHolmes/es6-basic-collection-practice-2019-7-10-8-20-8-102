'use strict';

module.exports = collection => collection.reduce((result, element) => {
  let ch = element.includes('-') ?  element.split('-')[0] : element;
  let num = element.includes('-') ? parseInt(element.split('-')[1]) : 1;
  result.find(x => x.key === ch) ? 
  result.find(x => x.key === ch).count+=num 
  : result.push({key:ch,count:num});
  return result;
},[])
