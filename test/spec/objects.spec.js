describe('objects test', function () {

    'use strict';

    var answers = window.ob;
    var stefan = {};

    ddescribe('listProperties', function () {
        beforeEach(function () {
            stefan = {
                'name': "Stefan",
                'car': "Red",
                'age': "23",
                'myWallet': function () {
                    var empty = 0;
                    return empty;
                }
            };

        });

        it('should return list of properties', function () {
            expect(answers.listProperties(stefan)).toEqual(['name', 'car', 'age', 'myWallet']);
        });
    });
});
