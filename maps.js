const myMap = new Map();
myMap.set('name', 'gleb');
myMap.set(100, 'This is a number');
const person1 = {
  name: 'gleb',
  age: 24,
};
let jsonStr = JSON.stringify(person1);
console.log(jsonStr);
let jsonParse = JSON.parse(jsonStr);
console.log(jsonParse);
myMap.set(person1, 'realy cool');
console.log(myMap);
myMap.delete('name');
console.log(myMap);

console.log(Object.fromEntries(myMap));
console.log('=============');

const score = 300;
const prizes = new Map();
prizes.set(100, 'beer');
prizes.set(200, 'coca cola');
prizes.set(300, 'whisky');
console.log(`you won ${prizes.get(score)}`);
const ul = document.querySelector('.prizes');

for (const [points, prize] of prizes) {
  const li = `<li>${points} - ${prize}</li>`;
  ul.insertAdjacentHTML('beforeend', li);
}
