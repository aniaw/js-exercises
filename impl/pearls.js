
(function () {
    'use strict';



    window.objects = {

        /*(1) Modify function to be immune to context substitution.[1]*/
        /*
         myWallet : {
         showMyMoney : function(){return this.c;},
         walletStatus : 1000
         }

        }
        * */

        myWallet : { //bad version
            showMyMoney : function(){return this.c;},
            walletStatus : 1000
        },

        myWallet2 : function() {
            var that = this;
            this.walletStatus = 1000;
            this.showMyMoney = function(){return that.walletStatus;}
            return this;

        }


    };
})();
