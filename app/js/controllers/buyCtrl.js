/**
 * Created by student on 06.12.16.
 */
(function (angular) {
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('BuyController', BuyController);
    function BuyController($scope, $routeParams, WalletService, CurrenciesService, $timeout,$window) {
        var vm = this;
        vm.currency = $routeParams.currency;
        vm.message = '';
        vm.get = WalletService['get' + vm.currency]();
        vm.rates = {};
        vm.showTitle = showTitle;
        vm.buy = buy;
        vm.divHide = true;
        vm.pln = WalletService.getPLN();
        vm.validateValue = validateValue;
        vm.back = back;
        getCurrencies();


        ///////////////////////
        function showTitle() {
            if ($routeParams.currency === 'EUR') {
                return 'Euro';
            } else if ($routeParams.currency === 'USD') {
                return 'Dolarów'
            } else if ($routeParams.currency === 'GBP') {
                return 'Funtów';
            }
        }

        function buy() {
            if (validateValue()) {
                return;
            } else {
                var value = parseInt($scope.value, 10);
                if (value > vm.get) {
                        vm.divHide = false;
                        vm.message ='Za mało środków';
                        $timeout(function () {
                            vm.message = '';
                            vm.divHide = true;
                        }, 5000);
                } else {
                    WalletService.buy(vm.rate.code, vm.rate.rates[0].bid, value);
                    vm.pln = WalletService.getPLN();
                    vm.get = WalletService['get' + vm.currency]();
                }
            }
        }

        function validateValue() {
            if ($scope.value === undefined || $scope.value === '' || parseInt($scope.value,10) === 0) {
                vm.divHide = false;
                vm.message = 'Nie wpisałeś ilości';
                $timeout(function () {
                    vm.message = '';
                    vm.divHide = true;
                }, 5000);
                return true;
            } else {
                vm.divHide = true;
                return false;
            }
        }

        function getCurrencies() {
            CurrenciesService.getCurrencies()
                .then(function (data) {
                    vm.rates = data;
                    for (var k in vm.rates) {
                        if (vm.rates[k].data.code === vm.currency) {
                            vm.rate = vm.rates[k].data;
                        }
                    }

                }, function (error) {
                    console.log('Error ', error);
                })
        }

        function back(){
            $window.history.back();
        }


    }

})(angular);