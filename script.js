const SPARKLE = new Audio('./images/sfx-sound/sparkleSfx.wav');

const title = document.querySelector('h1');

title.addEventListener('mouseover', () => {
  SPARKLE.play();
});



function scrollToElement(elementId) {
  var element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
document.addEventListener('contextmenu', event => event.preventDefault());
