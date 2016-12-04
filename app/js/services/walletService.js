/**
 * Created by sunday on 12/2/16.
 */
(function(angular){
    "use strict";
    angular.module('cinkciarzTraining')
        .service('WalletService', WalletService);

    function WalletService(MY_CONST, $localStorage){



        var wallet = $localStorage.$default({
            wallet: {
                pln: 6000,
                eur: 0
            }
        });

        this.getPln = function () {
            return $localStorage.wallet.pln;
        };

        this.getEur = function () {
            return $localStorage.wallet.eur;
        }

        this.addMoney = function(value){
            $localStorage.wallet.pln += value;
        }

        this.buyEur = function(value){
            $localStorage.wallet.pln -= (MY_CONST.EUR_BUY * value);
            $localStorage.wallet.eur += value;
        }

    }

})(angular);