const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
//
const myDiv = document.createElement('div');
myDiv.classList.add('block');
//
const title = document.createElement('h1');
title.textContent = 'My dev setup';
title.classList.add('title');
//
const myP = document.createElement('p');
myP.style.fontSize = '1.5em';
myP.classList.add('text');
const span = document.createElement('span');
span.textContent = 'check my @github';
span.classList.add('span');
//
const myImg = document.createElement('img');
myImg.classList.add('image');
myImg.src =
    'https://i1.sndcdn.com/avatars-Z20QHJYqiKWyswao-aQvH1w-t240x240.jpg';
//
const myButton = document.createElement('button');
myButton.classList.add('btn');
myButton.textContent = 'read more';

//
const myModal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');
console.log(myModal);
//
document.body.appendChild(wrapper);
wrapper.appendChild(myDiv);
myDiv.appendChild(title);
myDiv.appendChild(myP);
myP.appendChild(span);
myDiv.appendChild(myImg);
myDiv.appendChild(myButton);
//
myButton.addEventListener('click', () => {
    modalContent.style.animation = 'scale .5s';
    myModal.classList.toggle('hidden');
});
closeBtn.addEventListener('click', () => {
    myModal.classList.toggle('hidden');
});

//          Close by escape

let closeByEscape = (e) => {
    if (e.key == 'Escape') {
        myModal.classList.add('hidden');
    }
};
window.addEventListener('keydown', closeByEscape);
//  events
const buttons = document.querySelectorAll('.button');
let handleClicker = (e) => {
    console.log('You click there:');
    alert(
        'price this item: ' + parseFloat(e.target.dataset.price) + ' You sure?'
    );
};
buttons.forEach((button) => {
    button.addEventListener('click', handleClicker);
});
