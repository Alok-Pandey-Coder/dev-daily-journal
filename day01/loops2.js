//challenge1
/*
let teas = ['green tea', 'black tea','chai', 'oolong tea'];
let selectedTeas = [];

for(let i = 0; i < teas.length; i++) {
  if(teas[i] === 'chai') {
    break;
  }
  selectedTeas.push(teas[i]);
}

console.log(selectedTeas);
*/

// challenge 2
/*
let cities = ["london", "New York", "Paris", "Berlin"];
let visitedCities = [];

for(let i = 0; i < cities.length; i++) {
  if(cities[i] == "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
console.log(visitedCities);
*/

//challenge 3
/*
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if(num === 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);
*/

// challenge 4
/*
let teas = ['chai', 'green tea', 'herbal tea', 'black tea'];
let preferredTea = [];

for (const tea of teas) {
  if(tea === 'herbal tea') {
    continue;
  }
  preferredTea.push(tea);
}
console.log(preferredTea);
*/

//challenge 5
/*
let worldCities = {
  "Sydney": 5000000,
  "Tokyo": 9000000,
  "Berlin": 3500000,
  "Paris": 2200000
}
let largeCities = {};
for (const city in worldCities) {
  if(worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);
*/

//challenge 7
/*
let teaCollection = ['earl grey', 'green tea', 'chai', 'oolong tea'];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if(tea === 'chai') {
    return;
  }
  availableTeas.push(tea);
});

console.log(availableTeas);
*/

//challenge 8
/*
let myWorldCities = ['Berlin', 'Tokyo', 'Sydney', 'Paris'];
let traveledCities = [];
myWorldCities.forEach(city => {
  if(city === 'Sydney') {
    return;
  }
  traveledCities.push(city);
})
console.log(traveledCities);*/

//challenge 9
/*
let nums = [2, 5, 7, 9];
let doubledNums = [];
for(let i = 0; i < nums.length; i++) {
  if(nums[i] === 7) continue;
  doubledNums.push(nums[i]*2);
}
console.log(doubledNums);
*/
// challenge 10
/*
let myteas = ['chai', 'green tea', 'black tea', 'jasmine tea', 'herbal tea'];
let shortTeas = [];
for (const teas of myteas) {
  if(teas.length > 10) {
    break;
  }
  shortTeas.push(teas);
}
console.log(shortTeas);
*/
