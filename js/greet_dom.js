var nameBox = document.querySelector('.nameBox');
var greetMe = document.querySelector('.buttons');
var greetMeDisplay = document.querySelector('output[name="greetingResult"]');

function greetDom() {
  greetMeDisplay.innerHTML = greet(nameBox.value);
}
greetMe.addEventListener('click', greetDom);
