/**
 * Created by student on 16.12.16.
 */
(function ()
{
    'use strict';

    function RandomCurrencyService(RatesFactory,CurrenciesService)
    {

        var randomRates = RatesFactory.getRates();
        var orginalRates = CurrenciesService.getCurrencies()
                .then(function(data){
                    orginalRates = data;
                })
                .catch(function(error){
                    console.log('Error occured',error);
                });


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

               for(var i = 0; i < orginalRates.length; i++)
                {
                    var randomBuy = randomOperations(orginalRates[i].buy);
                    randomRates[i].buy = randomBuy;
                    while (isDiffrentToBig(orginalRates[i].buy, randomBuy)) {
                        randomRates[i].buy = randomOperations(orginalRates[i].buy);
                    }
                    var randomSell = randomOperations(orginalRates[i].sell);
                    randomRates[i].sell = randomSell;
                    while (isDiffrentToBig(orginalRates[i].sell, randomSell)) {
                        randomRates[i].sell = randomOperations(orginalRates[i].sell);
                    }
                }
            RatesFactory.addRates(randomRates);
        };

        function isDiffrentToBig(original, random)
        {
            return mathDiff(original, random) > 5;
        }

        function mathDiff(original, random)
        {
            return Math.abs(((original - random) / original) * 100);
        }


        this.getRandomRates = function ()
        {
            return randomRates;
        };


    }

    angular.module('cinkciarzTraining')
            .service('RandomCurrencyService', RandomCurrencyService);

})();
