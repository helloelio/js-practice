const button = document.querySelector('.clickMe');
console.log(button);

const wes = {
    name: 'Westopher Bos',
    sayHi: function sayHi() {
        console.log(`Hey ${this.name}`);
    },
};
button.addEventListener('click', wes.sayHi);
setTimeout(() => {
    console.log('done time to eat');
}, 1000);
function doALotOfStuff() {
    console.group('Doing some stuff');
    console.log('Im one');
    console.warn('watch out!');
    console.error('hey');
    console.groupEnd('Doing some stuff');
}
