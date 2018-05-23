var greetCount = 0;

function Greetings(checkedLanguage, name) {

  var storeCounter = 0;

  function assignName(name) {
    var namesList= [];

    if (name !== "") {
      namesList.push(name);
      greetCount += 1;
    }
    for (var i = 0; i < namesList.length; i++) {
      if (namesList[i].includes(name) == false) {
        namesList.push(name);
        greetCount += 1;
      //  break;
      }
      // if (namesList[i] !== name) {
      //   namesList.push(name);
      // }
    }
      return namesList;
    console.log(namesList);
  }




  function counter() {
    namesList.length = greetCount;
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
  greetPerson
}
}
