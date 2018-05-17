var nameBox = document.querySelector('.nameBox');
var greetMe = document.querySelector('.buttons');
var languages = document.querySelectorAll('.languages');
var greetMeDisplay = document.querySelector('output[name="greetingResult"]');

function greetDom() {
  var checkedBtn = '';

  for (var i = 0; i < languages.length; i++) {
    if (languages[i].checked) {
      checkedBtn = languages[i].value;
        languages[i].checked = false;
    }
  }
  greetMeDisplay.innerHTML = greetings(checkedBtn, nameBox.value);
  nameBox.value = "";
  }
greetMe.addEventListener('click', greetDom);
