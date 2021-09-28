/* eslint-disable no-unused-vars */
// Your code goes here
// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`

const links = document.querySelectorAll('nav a');
const bus = document.querySelector('.container img');
const heading = document.querySelector('.logo-heading');


console.log(links);
console.log(bus);



function big(event) {
    links[0].style.fontSize = '5rem';   
}

links[0].addEventListener('click', big);

function purple(event) {
    links[0].style.backgroundColor = 'purple';
}
links[0].addEventListener('mouseenter', purple)

function small(event) {
    links[0].style.fontSize = '.5rem';
}
links[0].addEventListener('dblclick', small)

function unPurple(event) {
    links[0].style.backgroundColor = 'white';
}
links[0].addEventListener('mouseleave', unPurple)

function round(event) {
    if(event.key === 'Escape') {
    bus.style.borderRadius = '250px';
}
}
document.addEventListener('keydown', round)

function loading(event) {
    heading.style.color = 'green';
}
document.addEventListener('load', loading)
