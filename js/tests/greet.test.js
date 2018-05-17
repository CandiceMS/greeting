describe('Greet Me', function(){

    it('should greet Pholisa in English', function(){
        assert.equal(greetings('english','Pholisa'), "Hello Pholisa");
    });
    it('should greet Andre in English', function(){
        assert.equal(greetings('english','Andre'), "Hello Andre");
    });
});
