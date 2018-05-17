describe('Greet Me', function(){

    it('should return greet Pholisa', function(){
        assert.equal(greet('Pholisa'), "Hello Pholisa!");
    });
    it('should return greet Andre', function(){
        assert.equal(greet('Andre'), "Hello Andre!");
    });
});
