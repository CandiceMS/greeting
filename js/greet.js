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

      return greet+name;
}
