var greetCount = 0;

function Greetings(checkedLanguage, name) {
  var map = {};

  function assignName(checkedLanguage, name) {
    if (name !== '' && checkedLanguage) {
      if (map[name] === undefined){
        map[name] = 0;
      }
      for (var name in map) {
        if (map[name] !== name) {
          map[name] = 0;
        }
      }
    }
  console.log(map);
  }

  function counter() {
    greetCount = Object.keys(map).length;
    }

  function alert(name, checkedLanguage) {
    if (!name && !checkedLanguage) {
      return "Please enter your name and select a language!"
    }
    else if (name === "") {
        return "Please enter your name!"
//change return string response. This one is for testing purposes.
    }
    else if (!checkedLanguage) {
      return "Please select a language!"
//change return string response. This one is for testing purposes.
    }
    else {
      return "";
    }
    }

  function greetPerson(checkedLanguage, name) {
    var greet = ''
      if (checkedLanguage === "english") {
        greet = "Hello ";
      }
      if (checkedLanguage === "sesotho") {
        greet = "Dumela ";
      }
      if (checkedLanguage === "french") {
        greet = "Bonjour ";
      }
      if (checkedLanguage && name) {
        return greet + name;
      }
      else {
        return "";
      }
  }

return {
  assignName,
  greetPerson,
  counter,
  alert
}
}
