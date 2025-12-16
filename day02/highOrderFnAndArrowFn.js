const squareNumbers = (arr) => (arr.map(el => el * el));

const filterEvenNumbers = (arr) => (arr.filter(el => el %2 === 0));

const sumPositiveNumbers = (arr) => (arr.filter(el => el > 0).reduce((sum, el) => sum + el, 0));

const getNames = (arr) => arr.map(item => item.name);
 
const findLongestWord = (arr) => 
  arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
