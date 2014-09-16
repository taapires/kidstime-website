/* global describe, it */

(function () {
    'use strict';

    /*describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });*/
    
    describe('DOM Tests', function () {
    /*var el = document.createElement("div");
    el.id = "myDiv";
    el.innerHTML = "Hi there!";
    el.style.background = "#ccc";
    document.body.appendChild(el);*/
 
    var myEl = document.getElementsByClassName('logo-tagline');
    it('is in the DOM', function () {
        expect(myEl).to.not.equal(null);
    });
 
    it('has the right text', function () {
        expect(myEl.innerHTML).to.equal('É TEMPO DE FAMÍLIA');
    });
 
});
    
})();
