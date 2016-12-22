/**
 * Created by student on 16.12.16.
 */
(function ()
{
    'use strict';

    function RandomCurrencyService(RatesFactory)
    {

        var randomRates = RatesFactory.getRates();
        var orginalRates = randomRates;


        function randomValue()
        {
            return (Math.random() * 2).toFixed(2);
        }

        function addValue(currency)
        {
            currency = parseFloat(currency);
            var value = parseFloat(randomValue()).toFixed(2);
            currency += currency * value / 100;
            currency = currency.toFixed(4);
            return currency;
        }

        function minusValue(currency)
        {
            currency = parseFloat(currency);
            var value = parseFloat(randomValue()).toFixed(2);
            currency -= currency * value / 100;
            currency = currency.toFixed(4);
            return currency;
        }

        function randomOperations(currency)
        {
            var random = Math.floor(Math.random() * 2);
            var value = 0;
            if (0 === random) {
                value = minusValue(currency);
            } else {
                value = addValue(currency);
            }
            return value;
        }

        this.setRandomRates = function ()
        {
            var originalBuy, originalSell;
            angular.forEach(randomRates, function (rate)
            {

                while(isDiffrentToBig(rate.buy, randomOperations(rate.buy))) {

                    rate.sell = randomOperations(rate.sell);
                    rate.buy = randomOperations(rate.buy);
                }
            });
            RatesFactory.addRates(randomRates);
        };

        function isDiffrentToBig(original,random){
            console.log(mathDiff(original,random));
            return !!(mathDiff(original, random) > 5 || mathDiff(original, random) < -5);
        }

        function mathDiff(original,random){
            return ((original/random) * 100) - 100;
        }


        this.getRandomRates = function ()
        {
            return randomRates;
        };


    }

    angular.module('cinkciarzTraining')
            .service('RandomCurrencyService', RandomCurrencyService);

})();
