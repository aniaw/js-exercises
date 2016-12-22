/**
 * Created by sunday on 12/1/16.
 */

(function ()
{
    'use strict';
    function MainCtrl($location, WalletService, $localStorage, CurrenciesService, $uibModal, RandomCurrencyService, $interval, $sessionStorage,RatesFactory)
    {
        var ctrl = this;
        ctrl.wallet = WalletService.getWallet();
        ctrl.rates = RatesFactory.getRates();
        ctrl.randomRates = [];

        var stop;

        ////////////////////////////////
        function reset()
        {
            var modalInstance = $uibModal.open({
                animation: true, templateUrl: 'myModalConfirm.html', controller: 'ModalConfirmController', controllerAs: 'ctrl', backdrop: 'static'

            });

            modalInstance.result.then(function ()
            {
                $location.path('/');
                WalletService.reset();
            });
        }

        function checkCurrencyWallet(code)
        {
            return $localStorage.wallet[code] <= 0;
        }


        function getCurrencies()
        {
            CurrenciesService.getCurrencies()
                    .then(function (data)
                    {
                        $sessionStorage.rates = data;
                    })
                    .catch(function (error)
                    {
                        console.log(error);
                    });

        }

        function setRandomRates()
        {
            stop = $interval(function ()
            {
                RandomCurrencyService.setRandomRates();
                getRandomRates();
            }, 5000);

        }

        function getRandomRates()
        {
            ctrl.rates = RandomCurrencyService.getRandomRates();

        }

        function isRandom()
        {
            return $sessionStorage.isRandom;
        }

        function stopRandom()
        {
            $interval.cancel(stop);
        }

        function checkRandom()
        {
            if (isRandom()) {
                setRandomRates();
            } else {
                stopRandom();
                getRandomRates();
            }
        }

        function toggleRandomRates()
        {
            $sessionStorage.isRandom = !$sessionStorage.isRandom;
            checkRandom();
        }

        ///////////////////////////////
        checkRandom();
        ctrl.reset = reset;
        ctrl.checkCurrencyWallet = checkCurrencyWallet;
        ctrl.toggleRandomRates = toggleRandomRates;
        ctrl.isRandom = isRandom;
        ctrl.stopRandom = stopRandom;
        //////////////////////

        if(!$sessionStorage.rates){
            getCurrencies();
        }

    }

    angular.module('cinkciarzTraining')
            .controller('MainCtrl', MainCtrl);

})();
