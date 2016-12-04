/**
 * Created by sunday on 12/1/16.
 */

(function(angular){
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('MainCtrl', MainCtrl);
    function MainCtrl($scope, MY_CONST, WalletService, $localStorage){
        var vm = this;


        vm.pln = WalletService.getPln();
        vm.eur = WalletService.getEur();

        vm.addMoney = function () {
            WalletService.addMoney();
        };



        vm.buyEur = buyEur;

        function buyEur() {
            var value = parseInt($scope.value,10);
            console.log('buyEur: '+  MY_CONST.EUR_BUY);
            WalletService.buyEur(value);
            vm.pln = WalletService.getPln();
            vm.eur = WalletService.getEur();

        }
    }

})(angular);