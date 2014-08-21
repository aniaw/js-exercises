describe('pearls test', function () {

    'use strict';

    var answers = window.objects;
    var stefan = {};

    describe('myWallet.showMyMoney', function () {

//        it('should be immune to context substitution', function () {
//            expect(answers.myWallet.showMyMoney.call({c : 2})).toEqual(1000);
//        });
//        it('should not change value c', function () {
//            expect(answers.myWallet.showMyMoney.call({c : 2})).not.toEqual(2);
//        });
        it('should be immune to context substitution', function () {
            expect(answers.myWallet2().showMyMoney.call({c : 2})).toEqual(1000);
        });
        it('should not change value c', function () {
            expect(answers.myWallet2().showMyMoney.call({c : 2})).not.toEqual(2);
        });

    });
});
