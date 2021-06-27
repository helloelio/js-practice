const body = document.querySelector('body');
const person = new Object({
  name: 'gleb',
  lastName: 'medvedev',
  age: 24,
  city: 'Penza',
  job: 'frontend developer',
  stack: {
    html: true,
    css: { sass: true },
    js: true,
    react: 'fifty fifty',
    vue: '10%',
    gulp: true,
    webpack: true,
  },
  sayHello: function (greeting = 'Hey') {
    return `${greeting} ${this.name}`;
  },
});

delete person.city;
const propertyCheck = prompt('what you want to check');
console.log(propertyCheck);
console.log(person[propertyCheck]);
