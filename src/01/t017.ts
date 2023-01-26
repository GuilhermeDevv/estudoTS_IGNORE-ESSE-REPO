//type assertions

//Condicional

const body = document.querySelector('body');
if (body) body.style.background = 'red';

//Type assertion

const body1 = document.querySelector('body') as HTMLBodyElement;
body1.style.background = 'red';
