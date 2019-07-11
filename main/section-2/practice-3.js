'use strict';

module.exports = collection => collection.reduce((result, element) => {
  let ch = element.includes('-') ?  element.split('-')[0] : 
    element.includes(':') ? element.split(':')[0] :
    element.includes('[') ? element.split('[')[0]:
    element;
  let num = element.includes('-') ?  parseInt(element.split('-')[1]) : 
    element.includes(':') ? parseInt(element.split(':')[1]) :
    element.includes('[') ? parseInt(element.substr(element.search('\\\[') + 1,element.search('\\]')-element.search('\\\[')-1)):
    1;
  result.find(x => x.name === ch) ? 
  result.find(x => x.name === ch).summary+=num 
  : result.push({name:ch,summary:num});
  return result;
},[])
