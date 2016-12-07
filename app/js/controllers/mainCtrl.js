/**
 * Created by sunday on 12/1/16.
 */

(function (angular) {
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('MainCtrl', MainCtrl);
    function MainCtrl($scope, WalletService,$window,$localStorage,CurrenciesService) {
        var vm = this;
        vm.storage = $localStorage;

        vm.pln = WalletService.getPLN();
        vm.eur = WalletService.getEUR();
        vm.usd = WalletService.getUSD();
        vm.gbp = WalletService.getGBP();


        vm.rates = {};
        getCurrencies();

        vm.reset = reset;
        vm.check = check;
        //////////////////////


        function reset() {
            var confirm = $window.confirm("Czy na pewno chcesz zresetowac portfel?");
            if(confirm) {
                WalletService.reset();
            }
        }

        function check(code){
            return $localStorage.wallet[code] <= 0;
        }



        function getCurrencies(){
            CurrenciesService.getCurrencies()
                .then(function(data){
                vm.rates = data;
            }, function(error){
                console.log('Error ',error);
            })
        }
    }

})(angular);