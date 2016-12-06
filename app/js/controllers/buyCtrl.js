/**
 * Created by student on 06.12.16.
 */
(function (angular) {
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('BuyController', BuyController);
    function BuyController($scope, $routeParams, WalletService, MY_CONST) {
        var vm = this;
        vm.currency = $routeParams.currency;
        vm.get = WalletService['get' + vm.currency]();
        vm.showTitle = showTitle;
        vm.buy = buy;
        vm.divHide = false;
        vm.pln = WalletService.getPln();
        vm.validateValue = validateValue;
        vm.errorsArray = [];

        ///////////////////////
        function showTitle() {
            if ($routeParams.currency === 'Eur') {
                return 'Euro';
            } else if ($routeParams.currency === 'Usd') {
                return 'Dolary'
            } else if ($routeParams.currency === 'Gbp') {
                return 'Funty';
            }
        }

        function buy() {
            if (validateValue()) {
                return;
            }else {
                var value = parseInt($scope.value, 10);
                if(value * MY_CONST.EUR_BUY > vm.pln){
                    console.log('insuff');
                    vm.errorsArray.push('Insufficent funds');
                }else {
                    WalletService['buy' + vm.currency](value);
                    vm.pln = WalletService.getPln();
                    vm.get = WalletService['get' + vm.currency]();
                }
            }
        }

        function validateValue() {
            if ($scope.value === undefined || $scope.value === '') {
                vm.divHide = false;
                return true;
            } else {
                vm.divHide = true;
                return false;
            }
        }
    }

})(angular);