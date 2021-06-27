const body = document.querySelector('body');
const person = {
  name: 'gleb',
  lasName: 'medvedev',
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
};
console.log(body);
body.innerHTML = JSON.stringify(person);
