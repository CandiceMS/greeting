var greetCount = 0;
var namesList = [];

function greetings(checkedLanguage, greetName) {
  var name = greetName;
  var greet = '';

      if (checkedLanguage === "english") {
        greet = "Hello "
      }
      else if (checkedLanguage === "sesotho") {
        greet = "Dumela "
      }
      else if (checkedLanguage === "french") {
        greet = "Bonjour "
      }

      if (greetName !== "") {
      greetCount += 1;
      namesList.push(name);
    }
    console.log(namesList);
      return greet+name;
    }
