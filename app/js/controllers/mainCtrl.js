/**
 * Created by sunday on 12/1/16.
 */

(function(angular){
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('MainCtrl', MainCtrl);
    function MainCtrl($scope, MY_CONST){
        var ctrl = this;

        ctrl.wallet = {
            pln: 5000,
            eur: 0
        };

        ctrl.buyEur = buyEur;

        function buyEur() {
            var value = parseInt($scope.value,10);
            console.log('buyEur: '+  MY_CONST.EUR_BUY);
            if(ctrl.wallet.pln >= MY_CONST.EUR_BUY){
                if((value * MY_CONST.EUR_BUY) <= ctrl.wallet.pln){
                    console.log(typeof ctrl.wallet.eur);
                    ctrl.wallet.pln -= value * MY_CONST.EUR_BUY;
                    ctrl.wallet.eur += value;
                }
            }
        }


    }

})(angular);