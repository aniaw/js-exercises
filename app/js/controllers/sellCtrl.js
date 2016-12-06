/**
 * Created by student on 06.12.16.
 */
(function(angular){
    "use strict";
    angular.module('cinkciarzTraining')
        .controller('SellController', SellController);
    function SellController($scope,$routeParams,$localStorage){
        var vm = this;
        vm.currency = $routeParams.currency;
        vm.get = $localStorage.wallet[vm.currency];
    }

})(angular);