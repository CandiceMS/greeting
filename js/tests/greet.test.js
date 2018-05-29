describe('Greet Me', function(){

    it('should greet Pholisa in English', function(){
      var englishPholisa = Greetings();
        assert.equal(englishPholisa.greetPerson('english','Pholisa'), "Hello Pholisa");
    });
    it('should greet Andre in English', function(){
      var englishAndre = Greetings();
        assert.equal(englishAndre.greetPerson('english','Andre'), "Hello Andre");
    });
    it('should greet Andrew in Sesotho', function(){
      var sesothoAndrew = Greetings();
        assert.equal(sesothoAndrew.greetPerson('sesotho','Andrew'), "Dumela Andrew");
    });
    it('should greet Yegan in French', function(){
      var frenchYegan = Greetings();
        assert.equal(frenchYegan.greetPerson('french','Yegan'), "Bonjour Yegan");
    });
     it('should count how many people have been greeted as 3', function(){
       var generalCount = Greetings();
          generalCount.assignName(true, 'Andrew');
          generalCount.assignName(true, 'Candice');
          generalCount.assignName(true, 'Taslin');

        assert.equal(3, generalCount.counter());
        //  given a map for manipulation
        // {"Andrew":0, "Candice":0, "Nathri":0}
     });
     it('should NOT increment counter if the same name has been entered before', function(){
       var noCount = Greetings();
          noCount.assignName(true, 'Nathri');
          noCount.assignName(true, 'Yegan');
          noCount.assignName(true, 'Nathri');

          noCount.counter();
        assert.equal(2, greetCount);
     });
     it('should count how many people have been greeted as 2 because greeting is incomplete', function(){
       var confirmCount = Greetings();
          confirmCount.assignName(true, 'Andrew');
          confirmCount.assignName(true, '');
          confirmCount.assignName(false, 'Taslin');

          confirmCount.counter();
        assert.equal(1, greetCount);
     });
     it('should return an alert message because no name input has been entered', function(){
       var alertName = Greetings();
        assert.equal(alertName.alert("", "english"), "Please enter your name!");
     });
     it('should return an alert message because no language has been selected', function(){
       var alertRadio = Greetings();
        assert.equal(alertRadio.alert("Candice", ""), "Please select a language!");
     });
   });
