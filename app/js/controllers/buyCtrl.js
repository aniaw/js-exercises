/**
 * Created by student on 06.12.16.
 */
(function (angular) {
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('BuyController', BuyController);
    function BuyController($scope, $routeParams, WalletService, MY_CONST,$timeout) {
        var vm = this;
        vm.currency = $routeParams.currency;
        vm.get = WalletService['get' + vm.currency]();
        vm.showTitle = showTitle;
        vm.buy = buy;
        vm.divHide = false;
        vm.pln = WalletService.getPln();
        vm.validateValue = validateValue;
        vm.errorsArray = [];

        var clicked = false;

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
                    if(!clicked) {
                        vm.errorsArray.push('Insufficent funds');
                        $timeout(function () {
                            vm.errorsArray = [];
                            $scope.value = 0;
                            clicked = false;
                        }, 5000);
                        clicked = true;
                    }
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