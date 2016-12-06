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
                    pln: startVal ? startVal : 0,
                    eur: 0,
                    usd: 0,
                    gbp: 0
                }
            });
        }

    }
})(angular);