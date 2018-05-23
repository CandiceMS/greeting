var nameBox = document.querySelector('.nameBox');
var greetMe = document.querySelector('.buttons');
// var language = document.querySelector("input[name='language']:checked");
//console.log(language);
//  var selectedLanguage = language.value;
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
  greetings.assignName();
  greetMeDisplay.innerHTML = greetings.greetPerson(checkedBtn, nameBox.value);
  nameBox.value = "";
  countNames.innerHTML = greetCount;

}
greetMe.addEventListener('click', greetDom);
