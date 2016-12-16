/**
 * Created by student on 16.12.16.
 */
(function ()
{
    'use strict';

    function RandomCurrencyService(CurrenciesService,$q)
    {

        var rates = [];
        var randomRates = [];

        function getCurrencies()
        {
            CurrenciesService.getCurrencies()
                    .then(function (data)
                    {
                        rates = data;
                        randomRates = data;
                    })
                    .catch(function (error)
                    {
                        console.log('Error ', error);
                    });
        }

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
            angular.forEach(randomRates, function (rate)
            {
                rate.sell = randomOperations(rate.sell);
                rate.buy = randomOperations(rate.buy);
            });
        };
        getCurrencies();

        this.getRandomRates = function ()
        {

                var defer = $q.defer();
                console.log(randomRates);

                defer.resolve(randomRates);
                console.log(defer.promise);
                return defer.promise;
        };


    }

    angular.module('cinkciarzTraining')
            .service('RandomCurrencyService', RandomCurrencyService);

})();
