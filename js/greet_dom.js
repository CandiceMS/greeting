var nameBox = document.querySelector('.nameBox');
var displayAlert = document.querySelector('output[name="alertName"]');
var greetMe = document.querySelector('.buttons');
var languages = document.querySelectorAll('.languages');
var greetMeDisplay = document.querySelector('output[name="greetingResult"]');
var countNames = document.querySelector('output[name="countResult"]');
var reset = document.querySelector('button[name="resetBtn"]');

var storage = JSON.parse(localStorage.getItem('holdCount'));

var greetings = Greetings();

var holdMap = greetings.returnMap('holdCount');
localStorage.setItem('holdCount', JSON.stringify(holdMap));

function onLoad() {

//   localStorage.holdCount;
   countNames.innerHTML = greetings.counter();
}

function greetDom() {
  var checkedBtn = '';

  for (var i = 0; i < languages.length; i++) {
    if (languages[i].checked) {
      checkedBtn = languages[i].value;
      languages[i].checked = false;
    }
  }

  greetings.alert(nameBox.value, checkedBtn);
  displayAlert.innerHTML = "";
  greetings.assignName(checkedBtn, nameBox.value);
  greetMeDisplay.innerHTML = greetings.greetPerson(checkedBtn, nameBox.value);
  displayAlert.innerHTML=greetings.alert(nameBox.value, checkedBtn);
  nameBox.value = "";

   var holdMap = greetings.returnMap();
   localStorage.setItem('holdCount', JSON.stringify(holdMap));

  //greetings.counter();
  countNames.innerHTML = greetings.counter();
}

function resetCount() {
  localStorage.clear();
  countNames.innerHTML = "";
  greetMeDisplay.innerHTML = "";
}

greetMe.addEventListener('click', greetDom);
reset.addEventListener('click', resetCount);
