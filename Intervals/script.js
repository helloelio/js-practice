const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const h2 = document.createElement('h2');
h2.classList.add('banner-counter');
modal.appendChild(h2);
const bannerLine = document.querySelector('.line');
const poopInterval = setInterval(() => {}, 0);

let count = 10;
h2.textContent = `закроется через ${count}`;

let counter = () => {
  h2.textContent = `закроется через ${count}`;
  count -= 1;
  return count;
};
let timeOutForLine = () => {
  bannerLine.style.animation = 'banner 10s';
};
setTimeout(() => {
  timeOutForLine();
}, 2000);

setTimeout(() => {
  document.querySelector('.modal').style.display = 'none';
  body.classList.remove('hidden');
}, 12000);

setInterval(counter, 1000);
