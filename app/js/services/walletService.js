/**
 * Created by sunday on 12/2/16.
 */
(function(angular){
    "use strict";
    angular.module('cinkciarzTraining')
        .service('WalletService', WalletService);

    function WalletService(MY_CONST, $localStorage, $window){

        this.getPln = function () {
            return $localStorage.wallet.pln;
        };

        this.getEur = function () {
            return $localStorage.wallet.eur;
        };

        this.getUsd = function(){
            return $localStorage.wallet.usd;
        };

        this.getGbp = function(){
            return $localStorage.wallet.gbp;
        };


        this.buyEur = function(value){
            $localStorage.wallet.pln -= (MY_CONST.EUR_BUY * value);
            $localStorage.wallet.eur += value;
        };

        this.sellEur = function(value){
            $localStorage.wallet.eur -= value;
            $localStorage.wallet.pln += (MY_CONST.EUR_SEL * value);
        };

        this.reset = function(){
            $localStorage.$reset();
            $window.location.reload();
        }

    }

})(angular);