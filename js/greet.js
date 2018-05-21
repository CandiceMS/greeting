var greetCount = 0;
var namesList = [];

function Greetings(checkedLanguage, greetName) {
  var greet = '';

  if (greetName !== "") {
    namesList.push(greetName);
  }

  // var foundTheName = false;
  // for (var i = 0; i < namesList.length; i++) {
  //   if (namesList[i] === greetName) {
  //     foundTheName = true;
  //     break;
  //   }
  // }
  // if (!foundTheName){
  //     namesList.push(greetName);
  // }
  console.log(namesList);

  function greetPerson(checkedLanguage, greetName) {
    if (checkedLanguage === "english") {
      greet = "Hello "
    } else if (checkedLanguage === "sesotho") {
      greet = "Dumela "
    } else if (checkedLanguage === "french") {
      greet = "Bonjour "
    }
    return greet + greetName;
  }

  function greetCounter() {
    namesList.length = greetCount;
  }

  return {
    greetPerson,
    greetCounter
  }
}




  // for (var i = 0; i < namesList.length; i++) {
  //   if (namesList[i] !== name) {
  //     namesList.push(name);
  //     greetCount += 1;
  //   } else if (namesList[i] == name) {
  //     !namesList.push(name);
  //   }
  // }
  // console.log(namesList);
  //


//    function counterNames() {
// for (var i = 0; i < namesList.length; i++) {
//   if (namesList[i] !== name) {
//     namesList.push(name);
//     greetCount += 1;
//   }
//   else if (namesList[i] == name) {
//     !namesList.push(name);
//     return greetCount;
//   }
// }
//  }

//    function counterNames() {
// for (var i = 0; i < namesList.length; i++) {
//   if (namesList[i] !== name) {
//     namesList.push(name);
//     greetCount += 1;
//   }
//   else if (namesList[i] == name) {
//     !namesList.push(name);
//   }
// }
//  console.log(namesList);
//  }

//return greetPerson;
//}
