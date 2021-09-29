/* eslint-disable no-unused-vars */
// Your code goes here
// * `mouseover` x
// * `keydown` x
// * `wheel` x
// * `load` x
// * `focus`
// * `resize` x
// * `scroll` x
// * `select` x
// * `dblclick` x
// * `drag / drop`
// * `copy` x
// * `auxclick` x
const mainHeader = document.querySelector('.main-navigation')
const links = document.querySelectorAll('nav a');
const bus = document.querySelector('.container img');
const body = document.querySelector('body');
console.log(body)

console.log(links);
console.log(bus);

function blackBack2(event){
    mainHeader.style.backgroundColor = 'black';
}
mainHeader.addEventListener('click', blackBack2)

function blackBack(event){
    links[3].style.backgroundColor = 'black';
    event.stopPropagation();
}
links[3].addEventListener('click', blackBack)

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

body.onload = function(event) {
    console.log('Body is loaded!!!')
}

function resizeRecolor() {
  body.style.backgroundColor = 'coral';
}

window.addEventListener('resize', resizeRecolor);

function scrollingColor() {
    body.style.backgroundColor = 'CornflowerBlue'
}
document.addEventListener('scroll', scrollingColor)

function wheelColor() {
    body.style.backgroundColor = 'BlanchedAlmond';
}
document.addEventListener('wheel', wheelColor)

function copyContent() {
    console.log('You just copied off of me!')
}
document.addEventListener('copy', copyContent)

document.addEventListener('selectstart', () => {
    console.log('You have started selecting something...')
})
body.addEventListener('auxclick', () => {
    body.style.backgroundColor = 'DarkOliveGreen';
})
links.forEach(event => {
    event.preventDefault();
})


