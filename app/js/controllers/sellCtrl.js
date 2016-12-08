/**
 * Created by student on 06.12.16.
 */
(function(angular){
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('SellController', SellController);
    function SellController($scope,$routeParams,WalletService,CurrenciesService,$timeout,$window){
        var vm = this;
        vm.currency = $routeParams.currency;

        vm.get = WalletService['get' + vm.currency]();
        vm.rates = {};
        vm.showTitle = showTitle;
        vm.sell = sell;
        vm.divHide = true;
        vm.pln = WalletService.getPLN();
        vm.validateValue = validateValue;
        vm.message = '';
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

        function sell() {
            if (validateValue()) {
                return;
            }else {
                var value = parseInt($scope.value, 10);
                if(value * vm.rate.rates[0].ask > vm.pln){
                    vm.divHide = false;
                    vm.message = 'Za mało środków';
                        $timeout(function () {
                            vm.divHide = true;
                        }, 5000);

                }else {
                    WalletService.sell(vm.rate.code, vm.rate.rates[0].ask,value);
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
                    //$scope.value = 0;
                    vm.divHide = true;
                }, 5000);
                return true;
            } else {
                vm.divHide = true;
                return false;
            }
        }

        function getCurrencies(){
            CurrenciesService.getCurrencies()
                .then(function(data){
                    var rates = data;
                    for(var k in rates){
                        if(rates[k].data.code === vm.currency){
                            vm.rate = rates[k].data;
                        }
                    }

                }, function(error){
                    console.log('Error ',error);
                })
        }

        function back(){
            $window.history.back();
        }
    }

})(angular);