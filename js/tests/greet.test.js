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
          generalCount.assignName('Andrew');
          generalCount.assignName('Candice');
          generalCount.assignName('Taslin');

          generalCount.counter();
        assert.equal(3, greetCount);
     });
     it('should NOT increment counter if the same name has been entered before', function(){
       var noCount = Greetings();
          noCount.assignName('Nathri');
          noCount.assignName('Yegan');
          noCount.assignName('Nathri');

          noCount.counter();
        assert.equal(2, greetCount);
     });
   });
