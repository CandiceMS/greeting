describe('Greet Me', function(){

    it('should greet Pholisa in English', function(){
        assert.equal(greetings('english','Pholisa'), "Hello Pholisa");
    });
    it('should greet Andre in English', function(){
        assert.equal(greetings('english','Andre'), "Hello Andre");
    });
    it('should greet Andrew in Sesotho', function(){
        assert.equal(greetings('sesotho','Andrew'), "Dumela Andrew");
    });
    it('should greet Yegan in French', function(){
        assert.equal(greetings('french','Yegan'), "Bonjour Yegan");
    });
    it('should count how many people have been greeted', function(){
        assert.equal(greetings('', 2), 2);
    });
    it('should NOT increment counter if no name has been entered', function(){
        assert.equal(greetings('',''), 0);
    });
});
