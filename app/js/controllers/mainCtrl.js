/**
 * Created by sunday on 12/1/16.
 */

(function (angular) {
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('MainCtrl', MainCtrl);
    function MainCtrl($scope, MY_CONST, WalletService,$window,$localStorage,CurrenciesService, $http) {
        var vm = this;
        vm.storage = $localStorage;

        vm.pln = WalletService.getPln();
        vm.eur = WalletService.getEur();
        vm.usd = WalletService.getUsd();
        vm.gbp = WalletService.getGbp();

        vm.EUR_BUY = MY_CONST.EUR_BUY;
        vm.EUR_SEL = MY_CONST.EUR_SEL;

        vm.rates = {};
        getCurrencies();

        vm.reset = reset;
        vm.sellEur = sellEur;
        vm.checkEur = checkEur;
        //////////////////////



        function sellEur() {
            var value = parseInt($scope.value, 10);
            WalletService.sellEur(value);
            vm.pln = WalletService.getPln();
            vm.eur = WalletService.getEur();
        }

        function reset() {
            var confirm = $window.confirm("Czy na pewno chcesz zresetowac portfel?");
            if(confirm) {
                WalletService.reset();
            }
        }

        function checkEur(){
            if($localStorage.wallet.eur > 0){
                return false;
            } else {
                return true;
            }
        }

        function getCurrencies(){
            console.log('get currencies');
            CurrenciesService.getCurrencies()
                .then(function(data){
                console.log(data);
                vm.rates = data;
            }, function(error){
                console.log('Error ',error);
            })
        }
    }

})(angular);