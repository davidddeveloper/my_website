//import Lenis from '@studio-freight/lenis';
console.log("Hello World")
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  console.log("Make sure you passed in a valid selector")
}

const selectElements = (selector) => {
  const elements = document.querySelectorAll(selector);
  if (elements) return elements;
  console.log("Error: selector not found. Make sure you passed in a valid selector")
}

/* Lenis setup */
/*const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)*/

/* Hamburger Menu */
const menuBtn = selectElement(".hamburger-menu");
const mobileMenu = selectElement(".mb-menu")
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('animate-menu')
  mobileMenu.classList.toggle('show')
})