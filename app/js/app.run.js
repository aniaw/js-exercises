/**
 * Created by sunday on 12/2/16.
 */
(function () {
    'use strict';

    angular
        .module('cinkciarzTraining')
        .run(run);

    function run($localStorage, $window) {
        if ($localStorage.wallet === undefined) {
            var startVal = $window.prompt('Podaj stan pocztkowy porfela');
            startVal = parseInt(startVal, 10);
            $localStorage.$default({
                wallet: {
                    PLN: startVal ? startVal : 0,
                    EUR: 0,
                    USD: 0,
                    GBP: 0
                }
            });
        }

    }
})(angular);