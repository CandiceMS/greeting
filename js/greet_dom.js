var nameBox = document.querySelector('.nameBox');
var displayAlert = document.querySelector('output[name="alertName"]');
var greetMe = document.querySelector('.buttons');
var languages = document.querySelectorAll('.languages');
var greetMeDisplay = document.querySelector('output[name="greetingResult"]');

var countNames = document.querySelector('output[name="countResult"]');
// console.log(countNames);

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
  displayAlert.innerHTML=greetings.alert(nameBox.value, checkedBtn);
  greetings.counter();
  countNames.innerHTML = greetCount;
  nameBox.value = "";

}
greetMe.addEventListener('click', greetDom);
