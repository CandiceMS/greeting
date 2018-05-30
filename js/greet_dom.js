var nameBox = document.querySelector('.nameBox');
var displayAlert = document.querySelector('output[name="alertName"]');
var greetMe = document.querySelector('.buttons');
var languages = document.querySelectorAll('.languages');
var greetMeDisplay = document.querySelector('output[name="greetingResult"]');
var countNames = document.querySelector('output[name="countResult"]');
var reset = document.querySelector('button[name="resetBtn"]');

var greetings = Greetings();

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
  displayAlert.innerHTML = greetings.alert(nameBox.value, checkedBtn);
  nameBox.value = "";

  countNames.innerHTML = greetings.counter(holdMap);

  var holdMap = greetings.returnMap();
  localStorage.setItem("map",JSON.stringify(holdMap));

  console.log(localStorage.getItem("map"));
  return holdMap;
}

 var holdMap  = JSON.parse(localStorage.getItem('map'));
 console.log(holdMap);

 countNames.innerHTML = greetings.counter(holdMap);

function resetCount() {
  localStorage.clear();
  countNames.innerHTML = "";
  greetMeDisplay.innerHTML = "";
}

greetMe.addEventListener('click', greetDom);
reset.addEventListener('click', resetCount);
