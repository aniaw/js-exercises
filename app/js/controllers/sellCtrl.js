/**
 * Created by student on 06.12.16.
 */
(function ()
{
    'use strict';

    function SellController($routeParams, WalletService, CurrenciesService, $timeout, $window, ValidateService)
    {
        var vm = this;
        vm.currency = $routeParams.currency;
        vm.rates = {};
        vm.value = 0;
        vm.divShow = ValidateService.getShow();
        vm.wallet = WalletService.getWallet();
        vm.message = '';

        ////////////////////

        function showTitle()
        {
            if ($routeParams.currency === 'EUR') {
                return 'Euro';
            } else if ($routeParams.currency === 'USD') {
                return 'Dolarów';
            } else if ($routeParams.currency === 'GBP') {
                return 'Funtów';
            }
        }

        function sell()
        {
            if (ValidateService.validate(vm.value,vm.message)) {
                return;
            }

            var value = parseInt(vm.value, 10);
            if (value * vm.rate.rates[0].ask > vm.wallet.PLN) {
                vm.divShow = true;
                vm.message = 'Za mało środków';
                $timeout(function ()
                {
                    vm.divShow = false;
                }, 5000);

            } else {
                WalletService.sell(vm.rate.code, vm.rate.rates[0].ask, value);
                vm.wallet = WalletService.getWallet();
            }

        }


        function getCurrencies()
        {
            CurrenciesService.getCurrencies()
                    .then(function (data)
                    {
                        var rates = data;
                        for (var k in rates) {
                            if (rates[k].data.code === vm.currency) {
                                vm.rate = rates[k].data;
                            }
                        }

                    }, function (error)
                    {
                        console.log('Error ', error);
                    });
        }

        function back()
        {
            $window.history.back();
        }


        vm.showTitle = showTitle;
        vm.sell = sell;
        //vm.validateValue = validateValue;
        vm.back = back;
        getCurrencies();


        ///////////////////////

    }


    angular.module('cinkciarzTraining')
            .controller('SellController', SellController);
})();
