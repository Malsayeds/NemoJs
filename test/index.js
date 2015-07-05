var should = require('chai').should(),
    Nemo = require('../index'),
    cap = Nemo.cap,
    uncap = Nemo.uncap;
describe('#Capitalize', function (){
    it('converts a into A',function(){
        cap('a').should.equal('A');
    });
    it('converts b into B',function(){
       cap('b').should.equal('B');
    });
    it('converts c into C',function(){
        cap('c').should.equal('C');
    });
    it('converts d into D',function(){
        cap('d').should.equal('D');
    });
});
describe('#uncapitalize',function(){
    it('converts A into a',function(){
        uncap('A').should.equal('a');
    });
    it('converts b into B',function(){
        uncap('B').should.equal('b');
    });
    it('converts c into C',function(){
        uncap('C').should.equal('c');
    });
    it('converts d into D',function(){
        uncap('D').should.equal('d');
    });

});


