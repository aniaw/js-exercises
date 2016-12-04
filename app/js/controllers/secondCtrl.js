/**
 * Created by sunday on 12/2/16.
 */
(function(angular){
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('SecondController', SecondController);
    function SecondController($scope,WalletService,$localStorage){
        var vm = this;
        vm.$storage = $localStorage;
    }
})(angular);