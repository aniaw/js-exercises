/**
 * Created by student on 19.12.16.
 */
(function ()
{
    'use strict';
    function RatesFactory($sessionStorage)
    {
        function Rates()
        {
            var ctrl = this;

            ctrl.oldRates = [];
            ctrl.rates = $sessionStorage.rates;

            ctrl.addRates = function (rates)
            {
                ctrl.oldRates = ctrl.rates;
                ctrl.rates = rates;
            };


            ctrl.getRates = function ()
            {
                return ctrl.rates;
            };

            ctrl.getOldRates = function ()
            {
                return ctrl.oldRates;
            };



        }

        return new Rates();
    }

    angular.module('cinkciarzTraining')
            .factory('RatesFactory', RatesFactory);

})();
