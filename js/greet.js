var greetCount = 0;

function Greetings(checkedLanguage, name) {
  var map = {};

  function assignName(name) {
    if (map[name] === undefined){
      map[name] = 0;
    }
    for (var name in map) {
      if (map[name] !== name) {
        map[name] = 0;
      }
    }
  console.log(map);
  }

function counter() {
  greetCount = Object.keys(map).length;
  }

  function greetPerson(checkedLanguage, name) {
    var greet = '';
    if (checkedLanguage === "english") {
      greet = "Hello ";
    }
    if (checkedLanguage === "sesotho") {
      greet = "Dumela ";
    }
    if (checkedLanguage === "french") {
      greet = "Bonjour ";
    }
    return greet + name;
  }


return {
  assignName,
  greetPerson,
  counter
}
}
