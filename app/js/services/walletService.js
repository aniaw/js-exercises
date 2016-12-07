/**
 * Created by sunday on 12/2/16.
 */
(function(angular){
    "use strict";
    angular.module('cinkciarzTraining')
        .service('WalletService', WalletService);

    function WalletService(MY_CONST, $localStorage, $window){

        this.getPLN = function () {
            return $localStorage.wallet.PLN;
        };

        this.getEUR = function () {
            return $localStorage.wallet.EUR;
        };

        this.getUSD = function(){
            return $localStorage.wallet.USD;
        };

        this.getGBP = function(){
            return $localStorage.wallet.GBP;
        };


        this.buy = function(code,rate,value){
            $localStorage.wallet.PLN += (rate * value);
            $localStorage.wallet[code] -= value;
        };

        this.sell = function(code,rate,value){
            $localStorage.wallet[code] += value;
            $localStorage.wallet.PLN -= (rate * value);
        };

        this.reset = function(){
            $localStorage.$reset();
            $window.location.reload();
        }

    }

})(angular);